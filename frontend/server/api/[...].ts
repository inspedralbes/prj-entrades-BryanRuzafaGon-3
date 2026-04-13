export default defineEventHandler(async (event) => {
  // Capturem el camí i les dades per reenviar-les al backend de Laravel
  const backendUrl = 'http://127.0.0.1:8000/api'
  const path = event.path.replace(/^\/api/, '')
  const target = `${backendUrl}${path}`

  try {
    // Utilitzem la funció nativa h3 per fer el proxying mantenint capçaleres i mètodes (POST, GET, etc.)
    return await proxyRequest(event, target)
  } catch (error) {
    console.error(`Error de bridge (Nuxt -> Laravel): ${error.message}`)
    throw createError({
      statusCode: 502,
      statusMessage: 'El backend no respon correctament.'
    })
  }
})
