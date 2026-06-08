import http from 'k6/http';
import { sleep, check } from 'k6';

const BASE_URL = 'https://quickpizza.grafana.com/api/pizza';
const token = 'uDEzVGYznLCCregd';

export const options = {
  stages: [
    { duration: '20s', target: 10 },
    { duration: '20s', target: 20 },
    { duration: '20s', target: 30 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: [
      'avg<600',
      'p(95)<1000',
      'max<2000',
    ],
    http_req_failed: ['rate<0.02'],
    checks: ['rate>0.95'],
  },
};

export default function () {
  const payload = JSON.stringify({
    maxCaloriesPerSlice: 1200,
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
    'tiempo < 1000ms': (r) => r.timings.duration < 1000,
  });

  if (!passed) {
    console.error(`VU ${__VU} iteration ${__ITER} Error. Status: ${response.status}, tiempo: ${response.timings.duration} ms`);
  } else {
    console.log(`VU ${__VU} iteration ${__ITER} OK - ${response.status} - ${response.timings.duration} ms`);
  }

  sleep(1);
}