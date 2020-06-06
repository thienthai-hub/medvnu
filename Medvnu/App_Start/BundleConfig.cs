using System.Web;
using System.Web.Optimization;

namespace Medvnu
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                       // "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));
            bundles.Add(new ScriptBundle("~/Scripts/js").Include(
                      "~/Scripts/js/bannertext-foter.js",
                      "~/Scripts/js/carousel.js",
                      "~/Scripts/js/carousel-sp.js",
                      "~/Scripts/js/chat-form.js",
                      "~/Scripts/js/click-info-sv.js",
                      "~/Scripts/js/des-show-hide-pc.js",
                      "~/Scripts/js/des-show-hied-sp.js",
                      "~/Scripts/js/footer-text.js",
                      "~/Scripts/js/gohome.js",
                      "~/Scripts/js/hover-menu.js",
                      "~/Scripts/js/jquery.carouFredSel-6.2.1.js",
                      "~/Scripts/js/jquery.carouFredSel-6.2.1-packed.js",
                      "~/Scripts/js/new-click.js",
                      "~/Scripts/js/open-menu-sp.js",
                      "~/Scripts/js/slider-pc.js",
                      "~/Scripts/js/text-image-sv.js",
                      "~/Scripts/js/text-slide.js",
                      "~/Scripts/js/wow.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
