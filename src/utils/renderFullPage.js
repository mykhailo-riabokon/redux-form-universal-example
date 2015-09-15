/**
 * Created by mikhail on 15.09.15.
 */
export default function (reactEl) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux-form universal example</title>
      </head>
      <body>
        <div id="app">${reactEl}</div>
        <script src="http://localhost:3000/assets/scripts/app.js"></script>
      </body>
    </html>
  `;
}
