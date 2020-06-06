using Medvnu.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Medvnu.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Autherize(Medvnu.Models.User usermodel)
        {
            using (LoginMVCEntities2 db = new LoginMVCEntities2())
            {
                var userDetail = db.Users.Where(x => x.UserName == usermodel.UserName && x.Password == usermodel.Password).FirstOrDefault();
                if (userDetail == null)
                {
                    usermodel.LoginErrorMessage = "wrong pass or username.";
                    return View("Index", usermodel);
                }
                else
                {
                    Session["idUser"] = userDetail.idUser;
                    return RedirectToAction("TrangChu", "Medvnu");
                }
            }

        }

    }
}