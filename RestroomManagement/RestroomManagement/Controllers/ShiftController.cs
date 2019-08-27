using RestroomManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RestroomManagement.Controllers
{
    public class ShiftController : ApiController
    {
        private sdirecttestdbEntities1 db = new sdirecttestdbEntities1();
        [HttpGet]
        public IList<ShiftMaster> GetShifts()
        {
            List<ShiftMaster> shiftMasters = new List<ShiftMaster>();
            {
                var result = db.ShiftMasters.ToList();
                foreach (var item in result.ToList())
                {
                    shiftMasters.Add(new ShiftMaster
                    {
                        //ShiftId = item.ShiftId,
                        ShiftName = item.ShiftName,
                        StartTime = item.StartTime,
                        EndTime = item.EndTime


                    }
                    );
                }
                return shiftMasters;

            }

        }
        //public List<ShiftMaster> GetShifts()
        //{
        //    try
        //    {
        //        return db.ShiftMasters.ToList();
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}
        [HttpPost]
        public IHttpActionResult PostShift(ShiftMaster shiftMaster)
        {


            using (var ctx = new sdirecttestdbEntities1())
            {
                ctx.ShiftMasters.Add(new ShiftMaster()
                {
                    
                    ShiftId = shiftMaster.ShiftId,
                    ShiftName = shiftMaster.ShiftName,
                    StartTime = shiftMaster.StartTime,
                    EndTime = shiftMaster.EndTime

                    

                });

                ctx.SaveChanges();
            }

            return Ok();
        }
        [HttpDelete]
        public IHttpActionResult DeleteShift(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid id");
            using (var ctx = new sdirecttestdbEntities1())
            {
                var shift = ctx.ShiftMasters
                    .Where(s => s.ShiftId == id)
                    .FirstOrDefault();
                ctx.Entry(shift).State = System.Data.Entity.EntityState.Deleted;
                ctx.SaveChanges();
            }
            return Ok();
        }
        [HttpPut]
        public IHttpActionResult PutUtility(ShiftMaster shift)
        {

            using (var ctx = new sdirecttestdbEntities1())
            {
                var existingShift = ctx.ShiftMasters.Where(s => s.ShiftId == shift.ShiftId)
                                                        .FirstOrDefault<ShiftMaster>();

                if (existingShift != null)
                {
                    existingShift.ShiftName = shift.ShiftName;
                    existingShift.StartTime = shift.StartTime;
                    existingShift.EndTime = shift.EndTime;
                    


                    ctx.SaveChanges();
                }
                else
                {
                    return NotFound();
                }
            }

            return Ok();
        }


    }
}
