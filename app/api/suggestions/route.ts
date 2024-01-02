export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get("term");
  
    const res = await fetch(
      `https://genx-movie.azurewebsites.net/api/getaisuggestion?term=${term}`,
      {
        method: "GET",
        next: {
          revalidate: 60 * 60 * 24, // cache for 1 day
        },
      }
    );
  
    const message = await res.text();
  
    return Response.json({ message });
  }