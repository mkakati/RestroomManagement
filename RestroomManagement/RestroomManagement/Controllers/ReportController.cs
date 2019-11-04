using RestroomManagement.Models;
using RestroomManagement.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RestroomManagement.Controllers
{
    public class ReportController : ApiController
    {
        public IList<Report> GetSampleData()
        {
            List<Report> listx = new List<Report>();
            using (sdirecttestdbEntities1 test = new sdirecttestdbEntities1())
            {
                var result = test.Utility_Report().ToList();
                foreach (var item in result.ToList())
                {
                    listx.Add(new Report
                    {
                        U_ID = item.U_ID,
                        Name = item.Name,
                        //CreatedDate = item.CreatedDate,
                        ReadingDate = item.ReadingDate,
                        IsDone = ((item.IsDone) ? "Yes" : "No"),
                        ShiftId = item.ShiftId,
                        ShiftName = item.ShiftName,
                        Feedback = item.Feedback,

                    });
                }
                return listx;
            }
        }
        

    }
}
