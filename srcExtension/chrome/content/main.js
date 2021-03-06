define([
    "firebug/lib/trace",
    "firebug/trace/traceModule",
    "firebug/trace/traceListener",
    "pixelperfect/pixelPerfectPanel",
    "pixelperfect/pixelPerfectModule",
],
function(FBTrace, TraceModule, TraceListener) {

    // ********************************************************************************************* //
    // The application/extension object

    var theApp =
    {
        initialize: function()
        {
            
            this.traceListener = new TraceListener("pixelPerfect;", "DBG_PIXELPERFECT", true, "resource://pixelperfect/skin/pixelperfect.css");
            TraceModule.addListener(this.traceListener);

            if (FBTrace.DBG_PIXELPERFECT)
                FBTrace.sysout("pixelPerfect; PixelPerfect extension initialize");
            
            // load scripts into main browser overlay (drag plugin, events, etc)
            Firebug.PixelPerfectUtilsModule.loadRequiredJsIntoToMainBrowserOverlay();
        },

        shutdown: function()
        {
            if (FBTrace.DBG_PIXELPERFECT)
                FBTrace.sysout("pixelPerfect; PixelPerfect extension shutdown");

            // Unregister all registered Firebug components
            Firebug.unregisterPanel(Firebug.PixelPerfectPanel);
            Firebug.unregisterModule(Firebug.PixelPerfectModule);
            Firebug.unregisterModule(Firebug.PixelPerfectFileModule);
            Firebug.unregisterModule(Firebug.PixelPerfectPanelActionsModule);
            Firebug.unregisterModule(Firebug.PixelPerfectUtilsModule);
            Firebug.unregisterStylesheet("chrome://pixelperfect/skin/pixelperfect.css");
            Firebug.unregisterStringBundle("chrome://pixelperfect/locale/pixelperfect.properties");

            // TODO: Extension shutdown
        }
    }

    // ********************************************************************************************* //

return theApp;

// ********************************************************************************************* //
});