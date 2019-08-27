using RestroomManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RestroomManagement.Controllers
{
    public class UtilityController : ApiController
    {
        private sdirecttestdbEntities1 db = new sdirecttestdbEntities1();
        //get
        public IList<Utility> GetUtilities()
        {
            List<Utility> listx = new List<Utility>();
            //using (sdirecttestdbEntities test = new sdirecttestdbEntities())
            {
                var result = db.Utilities.ToList();
                foreach (var item in result.ToList())
                {
                    listx.Add(new Utility
                    {
                        //ID = item.ID,
                        Name = item.Name


                    });

                }
                return listx;
            }
        }
        //public List<Utility> GetUtilities()
        //{
        //    try
        //    {
        //        return db.Utilities.ToList();
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}
        //post
        
        //public IHttpActionResult PostUtility(Utility utility)
        //{
        //    try
        //    {
        //        db.Utilities.Add(utility);
        //        db.SaveChanges();
        //    }
        //    catch (Exception)
        //    {
        //        throw;
                
        //    }
        //    return Ok(utility);
        //}
        //post
        [HttpPost]
        public IHttpActionResult PostUtility(Utility utility)
        {
           

            using (var ctx = new sdirecttestdbEntities1())
            {
                ctx.Utilities.Add(new Utility()
                {
                    //ID = utility.ID,
                    Name = utility.Name,
                    //CreatedDate = utility.CreatedDate,
                    //ModifiedDate = utility.ModifiedDate,
                    
                });

                ctx.SaveChanges();
            }

            return Ok();
        }
        [HttpPut]
        public IHttpActionResult PutUtility(Utility utility)
        {

            using (var ctx = new sdirecttestdbEntities1())
            {
                var existingUtility = ctx.Utilities.Where(s => s.ID == utility.ID)
                                                        .FirstOrDefault<Utility>();

                if (existingUtility!= null)
                {
                    existingUtility.Name = utility.Name;
                    

                    ctx.SaveChanges();
                }
                else
                {
                    return NotFound();
                }
            }

            return Ok();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid id");

            using (var ctx = new sdirecttestdbEntities1())
            {
                var utility = ctx.Utilities
                    .Where(s => s.ID == id)
                    .FirstOrDefault();

                ctx.Entry(utility).State = System.Data.Entity.EntityState.Deleted;
                ctx.SaveChanges();
            }

            return Ok();
        }
        
       


    }
}
