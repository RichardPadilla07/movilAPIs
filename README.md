# Deber de Repaso — Consumo de API’s + Login
## Integrantes:
- Richard Padilla
- Ariel Sanchez

## Funcionalidades Principales
1.- Login: Registrarse, recuperar contraseña y confirmacion de cuenta (correo y contraseña.) <br>
2.- Consumo de 3 API's: Memes, chistes y fotos de gatos. <br>
3.- Creacion de autenticaciones en firebase con correo y contraseña (BD.) <br>
4.- Despliegue hosting en firebase. <br>
5.- Transformar en APK. <br>

## Enlaces del Tik tok y Web

Web: https://loginapis-b8132.web.app/ <br>
Tik tok: <br>

## Login

- Interfaz de login: Mientras no a confrimado su creacion de cuenta no podra continuar.

<img width="633" height="548" alt="image" src="https://github.com/user-attachments/assets/5f81edd8-2235-4328-9cfb-32943fee60a5" />

<br>

<img width="559" height="562" alt="image" src="https://github.com/user-attachments/assets/107a1cbe-71c9-46e6-98ed-bd4aa74a5d7b" />

<br>

- Interfaz de registro: Si se registra con un nuevo correo se le enviara un correo electronico para confrimar la creacion de su correo.

<img width="614" height="459" alt="Captura de pantalla 2025-11-08 095305" src="https://github.com/user-attachments/assets/ae476b53-4714-4ccd-962b-487c86c72f5e" />

<br>

<br>

- Interfaz de recuperar contraseña: Se le enviara un enlace de recuperar siempre y cuando el correo este regsitrado sino, no le llegara nada por polticas de seguiridad y privacidad.

<img width="528" height="317" alt="image" src="https://github.com/user-attachments/assets/3a9b897c-feb9-43d6-b6bb-77e470c17a75" />

<br>

<img width="515" height="401" alt="image" src="https://github.com/user-attachments/assets/68f8cccf-3fbb-45b3-ab1e-bdd54261bd78" />

<br>

<img width="1807" height="833" alt="image" src="https://github.com/user-attachments/assets/eb3798d8-b99f-43e8-8b39-f7cef836f270" />

<br>

<img width="506" height="398" alt="image" src="https://github.com/user-attachments/assets/dcb84f0b-1037-43b2-b713-ee4288eb3834" />

<br>

<img width="501" height="277" alt="image" src="https://github.com/user-attachments/assets/17b8b3a3-965b-4201-a9e8-f40afdc1798f" />

<br>

<br>

- Interfaz de confirmacion de cuenta: Una vez registrado le llegara un enlace para confrimar correo creado.

<img width="518" height="462" alt="Captura de pantalla 2025-11-08 095251" src="https://github.com/user-attachments/assets/889d6e6e-11bb-4b42-9eb3-026faed3a36b" />

<br>

<img width="1822" height="797" alt="image" src="https://github.com/user-attachments/assets/beee4b84-94d7-4006-be8e-55a5a5a3818f" />

<br>

<img width="482" height="325" alt="image" src="https://github.com/user-attachments/assets/044b3fbb-e49a-484b-9d12-919d199c8947" />

<br>


## Consumo de API's

La aplicacion consume diferentes API's por separado, como un menu. 

<br>

- API de Memes: <br>
https://api.imgflip.com/get_memes

<br>

<img width="1911" height="880" alt="image" src="https://github.com/user-attachments/assets/80e82b72-f2ad-4333-b94c-cae9aab0d2d6" />

<br>

<br>

- API de Chistes en Ingles: <br>
https://v2.jokeapi.dev/joke/Any?amount=10

<br>

<img width="1889" height="878" alt="image" src="https://github.com/user-attachments/assets/bcb00549-c07a-49fa-9ffc-5dabda150b8b" />

<br>

<br>

- API de Fotos de Gatos: <br>
https://api.thecatapi.com/v1/images/search?limit=10

<br>

<img width="1890" height="870" alt="image" src="https://github.com/user-attachments/assets/9a8b606f-6e55-4248-89be-ec3db9a4ddd0" />

<br>

## Autenticacion en Firebase

Firebase da la posibilidad de poder crear una base de datos con correo y contraseña para ser consumido en cualquier aplicacion, esta nos dara unas credenciales para poder conectarnos y comenzar almacenar datos por medio del Login creado.

<br>

- Credenciales de Firebase

<br>

<img width="270" height="218" alt="image" src="https://github.com/user-attachments/assets/7b8bd4a7-95e0-419e-94ab-768f31d01315" />

<br> 

<br>

- Datos donde se almacena en Firebase web (Base de Datos)

<br>

<img width="1381" height="725" alt="image" src="https://github.com/user-attachments/assets/913444b1-d76e-44d3-af92-dfd538eabf85" />

<br>

<br>

## Despliegue hosting en Firebase

Firebase tambien tiene la funcionalidad de poner tu proyecto en despliegue mediante comandos desde donde se esta producciendo la aplicacion:

1.- Instalar firebase: <br>
npm install -g firebase-tools <br>
 
2.- Hacer build a tu aplicacion (finalizada): <br>
ionic build --prod <br>

3.- Inicializar firebase hosting: Tendras que logiarte y guiar a donde quiere que se suba tu proyecto. A esto deberes crear un nuevo proyecto en firebase (WEB) para subirlo.<br>
firebase login <br>
firebase init hosting <br>

4.- Hacer deploy (Subir a la web): <br>
firebase deploy <br>

5.- Te dara un enlace que sera la prueba del despliegue de tu aplicacion en la seccion "Hosting": <br>

Web: https://loginapis-b8132.web.app/ <br>

<img width="1728" height="706" alt="image" src="https://github.com/user-attachments/assets/c7b70b1d-4540-4c34-8868-ed1c54234c5a" />

<br>

<br>

## Transformar a APK

Aqui se pasa hacer apk una vez hecho el despliegue en firebase y finalizado el proyecto, utilizando android studio hacemos la transformacion. A continuacion solo se adjunta las fotos ya que practicamente es la misma explicacion ya dada. 

<br>

- Login

![Imagen de WhatsApp 2025-11-08 a las 10 34 42_43bfc2bc](https://github.com/user-attachments/assets/793d662c-40c6-4e57-afda-6f4042522cde)

<br>

<br>

- Registro

![Imagen de WhatsApp 2025-11-08 a las 10 34 42_52396701](https://github.com/user-attachments/assets/b5377d79-3094-41b6-a891-3f566a4a8ce0)

<br>

<br>

- Confirmacion de cuenta

![Imagen de WhatsApp 2025-11-08 a las 10 34 42_88165f4e](https://github.com/user-attachments/assets/50765b3b-a72d-4668-95a0-4849253509bf)

<br>

![Imagen de WhatsApp 2025-11-08 a las 10 34 43_9676269f](https://github.com/user-attachments/assets/726e0e15-e560-4944-b057-c9e7ce6e0dd1)


<br>

![Imagen de WhatsApp 2025-11-08 a las 10 34 43_de083f8c](https://github.com/user-attachments/assets/d0174b3a-c533-4414-9cfd-6d3311a60a5e)

<br>

<br>

- Recuperar contraseña

![Imagen de WhatsApp 2025-11-08 a las 10 34 43_7caf49eb](https://github.com/user-attachments/assets/014a6eb0-814a-4f86-8825-3be8c1cfc030)

<br>

![Imagen de WhatsApp 2025-11-08 a las 10 34 43_a0dda669](https://github.com/user-attachments/assets/109f6856-4a98-4cac-a477-c2bca522af5c)


<br>

![Imagen de WhatsApp 2025-11-08 a las 10 34 44_147cb8d8](https://github.com/user-attachments/assets/f5138857-0368-46cc-a504-64f11a006749)

<br>

![Imagen de WhatsApp 2025-11-08 a las 10 34 44_b1fc3de7](https://github.com/user-attachments/assets/2655c376-3bfb-4d0a-9b1d-d97be01093bd)

<br>

<br>

- API's

![Imagen de WhatsApp 2025-11-08 a las 10 34 43_1949640e](https://github.com/user-attachments/assets/603248bb-2dd4-4941-a7ed-147155410407)

<br>

![Imagen de WhatsApp 2025-11-08 a las 10 34 43_742ffcae](https://github.com/user-attachments/assets/d3386bd9-df5c-491f-8def-ea27c947c625)

<br>

![Imagen de WhatsApp 2025-11-08 a las 10 34 43_c52e6471](https://github.com/user-attachments/assets/a80eedff-1583-435e-a644-34a48f834e32)

<br>

<br>






















