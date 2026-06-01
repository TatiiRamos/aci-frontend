# 🛡️ Cloudflare: Seguridad Perimetral Avanzada (Proyecto ACI-Frontend)

Diseño e implementación de una capa de seguridad perimetral avanzada utilizando **Cloudflare (WAF y Workers)** para proteger la infraestructura web **ACI-Frontend** de la organización **AWAQ ONGD**.

## 🚀 Descripción del Proyecto
El enfoque principal fue establecer una barrera proactiva en el *Edge* de la red para mitigar amenazas antes de que alcancen el servidor de origen. Este proyecto asegura la integridad de servicios críticos, como formularios de donación y registros, mediante la detención de ataques automatizados y manuales.

## ✨ Habilidades de Ciberseguridad y Propuesta de Valor
Este trabajo demuestra mi capacidad para gestionar la seguridad de infraestructuras web en producción:

* **Mitigación de Amenazas (OWASP Top 10):** Implementación de reglas específicas para detener ataques de **Inyección SQL (SQLi)** y **Cross-Site Scripting (XSS)**.
* **Edge Computing con Cloudflare Workers:** Desarrollo del script `aci-security-proxy`, un proxy inteligente que analiza y filtra el tráfico en tiempo real.
* **Security Testing (Pentesting):** Realización de ataques simulados para validar la efectividad de las reglas del WAF y la lógica del Worker antes del despliegue final.
* **Protección de Datos Sensibles:** Aseguramiento de los puntos de entrada de datos (formularios de donación) para prevenir la exfiltración o manipulación de información.

| Componente | Función Técnica |
| :--- | :--- |
| **Cloudflare WAF** | Filtrado de tráfico basado en reputación de IP y firmas de ataque. |
| **Cloudflare Workers** | Lógica de seguridad personalizada y validación de cabeceras en el Edge. |
| **Security Proxy** | Intercepción de peticiones maliciosas antes de impactar el Front-End. |

## 🛠️ Tecnologías Utilizadas
* **Cloudflare Ecosystem:** WAF, Workers, Firewall Rules.
* **JavaScript (Edge Runtime):** Lógica del Worker para el filtrado de payloads.
* **Protocolos de Red:** Gestión de cabeceras HTTP/HTTPS y seguridad TLS.

## 📋 Proceso de Validación
Para garantizar la eficacia del sistema, se llevaron a cabo las siguientes pruebas:
1. **Simulación de Inyección SQL:** Intentos de bypass en formularios para validar el bloqueo del WAF.
2. **Inyección de Scripts (XSS):** Pruebas de carga de scripts maliciosos en los campos de entrada.
3. **Análisis de Logs:** Monitoreo del tráfico bloqueado para ajustar falsos positivos en el Proxy de Seguridad.

## 📄 Documentación Completa
Puedes revisar el informe técnico detallado y el flujo de implementación en el siguiente enlace:
[👉 Ver Documentación en Adobe Acrobat](https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:62082082-6d8d-4314-b372-845ff7d2a7b2)

## 🤝 Contacto
Como desarrolladora con especialización en **Ciberseguridad**, me enfoco en construir aplicaciones donde la seguridad no es un añadido, sino una base fundamental.

* **LinkedIn:** [linkedin.com/in/tatiana-ramos-gpti/](https://www.linkedin.com/in/tatiana-ramos-gpti/)
* **Correo:** [tatiiramos9@gmail.com](mailto:tatiiramos9@gmail.com)

---
© 2024 Tatiana Ramos | Colaboración para AWAQ ONGD.
