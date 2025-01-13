# ChatBot en React

[![React](https://img.shields.io/badge/React-18.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/) [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![CSS](https://img.shields.io/badge/CSS-Modules-blueviolet?style=for-the-badge&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Descripción

Este proyecto es un chatbot interactivo desarrollado con **React**, que permite a los usuarios mantener conversaciones en tiempo real con un asistente virtual. Incluye un diseño moderno con estilos personalizados en CSS, soporte para mensajes dinámicos y una funcionalidad de carga mientras el bot procesa las respuestas.

![Chatbot Screenshot](https://github.com/rodrigog898/Asistente-openai/blob/0c2163b8f7866f9b63d7196d6d4a466a626255cf/img/chatimage)

---

## Características

- ✅ **Interfaz moderna**: diseño limpio y minimalista.
- 🛠️ **Mensajes dinámicos**: los mensajes del bot y del usuario se procesan y renderizan en tiempo real.
- ⏳ **Indicador de carga**: muestra un estado de carga mientras se espera una respuesta del bot.
- 🎉 **Mensaje de bienvenida**: se despliega al abrir la aplicación.
- 📜 **Scroll automático**: desplaza automáticamente el chat hacia el último mensaje.
- 🚀 **Integración con API**: conecta con un backend para generar respuestas dinámicas.

---

## Tecnologías

- [React](https://reactjs.org/) - Biblioteca principal para el desarrollo de la interfaz.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Lógica del frontend.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Estilos personalizados para el diseño.
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Consumo de datos desde el backend.

---

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm start
   ```

4. Accede a la aplicación en tu navegador:

   ```
   http://localhost:3000
   ```

---

## Uso

1. Haz clic en el icono de chat (💬) para abrir la ventana del chatbot.
2. Escribe un mensaje en el campo de entrada.
3. Presiona **Enter** o haz clic en el botón de enviar para interactuar con el bot.
4. Observa cómo el bot responde dinámicamente a tus mensajes.

---

## Estructura del proyecto

```plaintext
src/
├── components/
│   ├── ChatBot.js         # Lógica principal del chatbot
│   ├── chatbot.css        # Estilos personalizados
├── assets/
│   └── chat.jpg           # Imagen del icono del bot
├── App.js                 # Componente principal
├── index.js               # Entrada de la aplicación
```

---

## Personalización

- **Actualizar API**: Cambia la URL de la API y el token en el método `fetch` del archivo `ChatBot.js`.
- **Estilos**: Personaliza el archivo `chatbot.css` para cambiar los colores, fuentes y diseño del chatbot.
- **Icono del bot**: Sustituye la imagen `chat.jpg` en la carpeta `assets`.

---

## Contribución

¡Las contribuciones son bienvenidas! Por favor, sigue los siguientes pasos:

1. Realiza un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección de error:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Realiza tus cambios y realiza un commit:

   ```bash
   git commit -m "Agregada nueva funcionalidad"
   ```

4. Haz un push a la rama:

   ```bash
   git push origin feature/nueva-funcionalidad
   ```

5. Crea un Pull Request en GitHub.

---

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

## Autor

Desarrollado por [Rodrigo Aravena](https://github.com/rodrigog898). ¡Siéntete libre de contactarme si tienes preguntas o sugerencias! 🚀
