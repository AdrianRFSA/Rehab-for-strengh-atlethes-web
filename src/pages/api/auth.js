export const GET = async ({ redirect, url }) => {
  try {
    const clientID = import.meta.env.OAUTH_CLIENT_ID;

    if (!clientID) {
      console.error('Error: OAUTH_CLIENT_ID no está configurado');
      return new Response('Error: Configuración de OAuth incompleta', { status: 500 });
    }

    // Usar la URL de producción (debe coincidir con GitHub OAuth App)
    const redirectUri = 'https://rehab-for-strengh-atlethes-web.vercel.app/api/callback';

    const authBase = 'https://github.com/login/oauth/authorize';

    // Construir la URL de autorización
    const authEndpoint = `${authBase}?client_id=${clientID}&scope=repo,user&redirect_uri=${encodeURIComponent(redirectUri)}`;

    return redirect(authEndpoint, 302);
  } catch (error) {
    console.error('Error durante la autenticación:', error);
    return new Response(`Error interno: ${error.message}`, { status: 500 });
  }
};