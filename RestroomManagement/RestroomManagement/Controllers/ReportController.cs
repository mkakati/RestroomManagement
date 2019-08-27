using RestroomManagement.Models;
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
        public IList<Utility_Report_Result> GetSampleData()
        {
            List<Utility_Report_Result> listx = new List<Utility_Report_Result>();
            using (sdirecttestdbEntities1 test = new sdirecttestdbEntities1())
            {
                var result = test.Utility_Report().ToList();
                foreach (var item in result.ToList())
                {
                    listx.Add(new Utility_Report_Result
                    {
                        U_ID = item.U_ID,
                        Name = item.Name,
                        //CreatedDate = item.CreatedDate,
                        ReadingDate = item.ReadingDate,
                        IsDone = item.IsDone,
                        ShiftId = item.ShiftId,
                        ShiftName = item.ShiftName,
                        Feedback = item.Feedback
                    });

                }
                return listx;
            }
        }
        //public IHttpActionResult GetAllStudents()
        //{
        //    IList<Utility_Report_Result> students = null;

        //    using (var ctx = new sdirecttestdbEntities())
        //    {
        //        students = ctx.Utilities.Include("StudentAddress")
        //                    .Select(item => new Utility_Report_Result()
        //                    {
        //                        //U_ID = item.U_ID,
        //                        Name = item.Name,
        //                        CreatedDate = item.CreatedDate,
        //                        //IsDone = item.IsDone,
        //                        //ShiftId = item.ShiftId,
        //                        //ShiftName = item.ShiftName,
        //                        //Feedback = item.Feedback
        //                    }).ToList<Utility_Report_Result>();
        //    }

        //    if (students.Count == 0)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(students);
        //}

    }
}
