import http from 'k6/http';
import { sleep, check } from 'k6';

const BASE_URL = 'https://quickpizza.grafana.com/api/pizza';
const token = 'uDEzVGYznLCCregd';

export const options = {
  vus: 20,
  duration: '30s',
  thresholds: {
    http_req_duration: [
      'avg<500',
      'p(90)<700',
      'p(95)<900',
    ],
    http_req_failed: ['rate<0.01'],
    checks: ['rate>0.95'],
  },
};

export default function () {
  const payload = JSON.stringify({
    maxCaloriesPerSlice: 1000,
    mustBeVegetarian: false,
  });

  const params = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  const response = http.post(BASE_URL, payload, params);

  const passed = check(response, {
    'status 200': (r) => r.status === 200,
    'tiempo < 600ms': (r) => r.timings.duration < 600,
  });

  console.log(`VU ${__VU} at iteration ${__ITER} STATUS ${response.status} tiempo ${response.timings.duration} ms`);

  sleep(1);
}