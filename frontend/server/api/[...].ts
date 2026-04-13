export default defineEventHandler(async (event) => {
  const backendUrl = 'http://127.0.0.1:8000/api'
  const path = event.path.replace(/^\/api/, '')
  const target = `${backendUrl}${path}`

  console.log(`[BRIDGE] Reenviant: ${event.method} ${event.path} -> ${target}`)

  try {
    return await proxyRequest(event, target, {
      fetchOptions: {
        // Ignorem errors de certificat si n'hi hagués (encara que és HTTP)
        rejectUnauthorized: false
      }
    })
  } catch (error) {
    console.error(`[BRIDGE ERROR]: ${error.message}`)
    throw createError({
      statusCode: 502,
      statusMessage: `Error de connexió interna al backend: ${error.message}`
    })
  }
})
