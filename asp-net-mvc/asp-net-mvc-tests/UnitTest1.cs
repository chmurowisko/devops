using System;
using System.Web.Mvc;
using asp_net_mvc.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace asp_net_mvc_tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestHomeControllerIndexAction()
        {
            string expectedResult = "Your application description page.";
            HomeController homeController = new HomeController();
            ViewResult actionResult = homeController.About() as ViewResult;
            
            Assert.AreEqual(actionResult.ViewBag.Message, expectedResult);
        }

        [TestMethod]
        public void TestHomeControllerContactAction()
        {
            string expectedResult = "Your contact page.";
            HomeController homeController = new HomeController();
            ViewResult actionResult = homeController.Contact() as ViewResult;

            Assert.AreEqual(actionResult.ViewBag.Message, expectedResult);
        }
    }
}
