using RestroomManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RestroomManagement.Controllers
{
    public class ChecklistController : ApiController
    {
        private sdirecttestdbEntities1 db = new sdirecttestdbEntities1();

        [HttpPost]
        
        public IHttpActionResult PostChecklist(Checklist_Utility checklist_Utility)
        {
            using (var ctx = new sdirecttestdbEntities1())
            {
                ctx.Checklist_Utility.Add(new Checklist_Utility()
                {
                    U_ID = checklist_Utility.U_ID,
                    ShiftId = checklist_Utility.ShiftId,
                    IsDone = checklist_Utility.IsDone,
                    Feedback = checklist_Utility.Feedback,
                    CreatedDate = System.DateTime.UtcNow,
                    ReadingDate = checklist_Utility.ReadingDate,
                    

                });
                ctx.SaveChanges();
            }
            return Ok();
        }


    }
}
