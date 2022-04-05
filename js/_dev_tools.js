function tlprtDevToolsStart(ctx)
{
    if (!ctx.DevTools)
    {
        console.warn("Can't find DevTools for Teleport");
        return;
    }

    if (!ctx.tlprt)
    {
        console.warn("Can't find Teleport instance in ctx");
        return;
    }
    try
    {
        let _ = new ctx.DevTools(ctx.tlprt, {
            container: document.querySelector("#dev-tools"),
            apiKey: ctx.tlprt.apiKey
        });
    }
    catch (e) {
        console.error(e);
    }
}
