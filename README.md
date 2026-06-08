# Proyecto de pruebas de carga con K6 - QuickPizza API

Este proyecto contiene scripts de pruebas de carga y validación funcional usando **k6** sobre la API:

`https://quickpizza.grafana.com/api/pizza`

El objetivo es evaluar tiempos de respuesta, estabilidad, validaciones básicas de la respuesta y comportamiento bajo diferentes niveles de carga.

---

## Tecnologías usadas

- [k6](https://k6.io/)
- JavaScript
- API QuickPizza de Grafana

---

## Estructura del proyecto

```bash
├── quickpizza_carga_constante.js
├── quickpizza_carga_progresiva.js
├── reports/
│   ├── result_carga_constante.json
│   ├── result_carga_progresiva.json
├── README.md
```
## Requisitos

Antes de ejecutar las pruebas, asegúrate de tener instalado:

- **k6**

### Instalar k6

#### En Windows
```bash
choco install k6
```
---

## Scripts disponibles
La API utilizada en este proyecto es:

```text
https://quickpizza.grafana.com/api/pizza
```

### 1. Script simple de validacion
Realiza solicitudes simples a la API para validar disponibilidad y estado HTTP.

**Objetivo:**
- comprobar que la API responde
- validar status 200
- medir tiempos básicos

---

### 2. Script con stages
Simula incremento progresivo de usuarios virtuales.

**Objetivo:**
- observar el comportamiento bajo carga gradual
- medir degradación de tiempos
- validar estabilidad

---

## Ejecución de scripts

Para ejecutar un script de carga constante:

```bash
k6 run quickpizza_carga_constante.js
```

Para ejecutar un script de carga progresiva:

```bash
k6 run quickpizza_carga_progresiva.js
```

---

## Exportar resultados

### Exportar resumen en JSON
```bash
k6 run --summary-export=results/result_carga_constante.json quickpizza_carga_constante.js
```
```bash
k6 run --summary-export=results/result_carga_progresiva.json quickpizza_carga_progresiva.js
```


---

## Métricas importantes

Durante la ejecución, k6 mostrará métricas como:

- `http_req_duration`: duración de las solicitudes
- `http_req_failed`: tasa de errores HTTP
- `checks`: validaciones exitosas
- `vus`: usuarios virtuales activos
- `iterations`: número de iteraciones ejecutadas

---

## Thresholds

Algunos scripts incluyen **thresholds** para validar criterios mínimos de aceptación.

Ejemplo:

```javascript
thresholds: {
  http_req_duration: ['p(95)<300'],
  checks: ['rate>0.95'],
}
```

Esto significa:

- el 95% de las solicitudes debe responder en menos de 300 ms
- más del 95% de las validaciones deben pasar

---

## Buenas prácticas aplicadas

- validación de `status 200`
- validación de tiempos de respuesta
- uso de `sleep(1)` para simular pausas entre iteraciones
- uso de `thresholds` para definir criterios de aceptación
- separación de scripts por tipo de prueba
