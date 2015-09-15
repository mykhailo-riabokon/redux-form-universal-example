/**
 * Created by mikhail on 15.09.15.
 */
export default function (reactEl) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux-form universal example</title>
        <style>
           .simple-form-container {
              width: 400px;
              height: 300px;
              margin: 50px auto;
           }
           .form__group {
              margin-bottom: 10px;
           }
           .form__group > * {
              display: inline-block;
           }
           .form__group__label {
              padding-right: 10px;
           }
           .form__group__label .text {
              margin-right: 10px;
           }
         </style>
      </head>
      <body>
        <div id="app">${reactEl}</div>
        <script src="http://localhost:3000/assets/scripts/app.js"></script>
      </body>
    </html>
  `;
}
