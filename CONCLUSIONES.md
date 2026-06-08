# Resumen de resultados de las pruebas realizadas

### 1-. Para el script **quickpizza_carga_constante.js** se ejecutó una prueba con hasta **20 usuarios virtuales** y un total de **499 solicitudes** al endpoint evaluado.

## Resultados principales

- **499/499** respuestas con **status 200**
- **499/499** validaciones de tiempo menores a **600 ms**
- **0 errores HTTP**
- **100% de checks exitosos**

## Rendimiento

- **Promedio:** `221.38 ms`
- **Mediana:** `221.67 ms`
- **Máximo:** `293.61 ms`
- **p90:** `262.55 ms`
- **p95:** `266.73 ms`

## Conclusión

La API presentó un comportamiento **estable y satisfactorio** durante la prueba. Todas las solicitudes fueron exitosas, sin errores y con tiempos de respuesta dentro de los valores esperados.

## Reportes
Archivo json con los resultados se pueden ver en la siguiente ruta:
```text
results\result_carga_constante.json
```

Logs por consola:
```text
 █ THRESHOLDS 

    checks
    ✓ 'rate>0.95' rate=100.00%

    http_req_duration
    ✓ 'avg<500' avg=221.37ms
    ✓ 'p(90)<700' p(90)=262.54ms
    ✓ 'p(95)<900' p(95)=266.73ms

    http_req_failed
    ✓ 'rate<0.01' rate=0.00%


  █ TOTAL RESULTS 

    checks_total.......: 998     31.98686/s
    checks_succeeded...: 100.00% 998 out of 998
    checks_failed......: 0.00%   0 out of 998

    ✓ status 200
    ✓ tiempo < 600ms

    HTTP
    http_req_duration..............: avg=221.37ms min=165.77ms med=221.66ms max=293.61ms p(90)=262.54ms p(95)=266.73ms
      { expected_response:true }...: avg=221.37ms min=165.77ms med=221.66ms max=293.61ms p(90)=262.54ms p(95)=266.73ms
    http_req_failed................: 0.00%  0 out of 499
    http_reqs......................: 499    15.99343/s

    EXECUTION
    iteration_duration.............: avg=1.23s    min=1.16s    med=1.22s    max=1.66s    p(90)=1.26s    p(95)=1.28s   
    iterations.....................: 499    15.99343/s
    vus............................: 7      min=7        max=20
    vus_max........................: 20     min=20       max=20

    NETWORK
    data_received..................: 642 kB 21 kB/s
    data_sent......................: 99 kB  3.2 kB/s
```

### 2-. Para el script **quickpizza_carga_progresiva.js** ejecutó una prueba con hasta **30 usuarios virtuales** y un total de **857 solicitudes** al endpoint evaluado.

## Resultados principales

- **857/857** respuestas con **status 200**
- **857/857** validaciones de tiempo menores a **1000 ms**
- **0 errores HTTP**
- **100% de checks exitosos**

## Rendimiento

- **Promedio:** `218.96 ms`
- **Mediana:** `218.77 ms`
- **Máximo:** `284.24 ms`
- **p90:** `260.14 ms`
- **p95:** `263.99 ms`

## Conclusión

La API presentó un comportamiento **estable, rápido y satisfactorio** durante la prueba. Todas las solicitudes fueron exitosas y los tiempos de respuesta se mantuvieron muy por debajo del umbral definido.

## Reportes
Archivo json con los resultados se pueden ver en la siguiente ruta:
```text
results\result_carga_progresiva.json
```
Logs por consola:

```text
  █ THRESHOLDS 

    checks
    ✓ 'rate>0.95' rate=100.00%

    http_req_duration
    ✓ 'avg<600' avg=218.95ms
    ✓ 'p(95)<1000' p(95)=263.99ms
    ✓ 'max<2000' max=284.24ms

    http_req_failed
    ✓ 'rate<0.02' rate=0.00%


  █ TOTAL RESULTS 

    checks_total.......: 1714    24.098095/s
    checks_succeeded...: 100.00% 1714 out of 1714
    checks_failed......: 0.00%   0 out of 1714

    ✓ status 200
    ✓ tiempo < 1000ms

    HTTP
    http_req_duration..............: avg=218.95ms min=157.92ms med=218.77ms max=284.24ms p(90)=260.13ms p(95)=263.99ms
      { expected_response:true }...: avg=218.95ms min=157.92ms med=218.77ms max=284.24ms p(90)=260.13ms p(95)=263.99ms
    http_req_failed................: 0.00%  0 out of 857
    http_reqs......................: 857    12.049047/s

    EXECUTION
    iteration_duration.............: avg=1.22s    min=1.16s    med=1.22s    max=1.7s     p(90)=1.26s    p(95)=1.26s   
    iterations.....................: 857    12.049047/s
    vus............................: 1      min=1        max=29
    vus_max........................: 30     min=30       max=30

    NETWORK
    data_received..................: 1.1 MB 15 kB/s
    data_sent......................: 163 kB 2.3 kB/s
```
