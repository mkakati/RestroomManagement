using RestroomManagement.Models;
using RestroomManagement.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace RestroomManagement.Controllers
{
    public class UtilityController : ApiController
    {
        private sdirecttestdbEntities1 db = new sdirecttestdbEntities1();
        [HttpGet]
        public ResponseModel GetUtilities()
        {
            ResponseModel response = new ResponseModel();
            try
            {
                List<Util> listx = new List<Util>();
               
                {
                    var result = db.Utilities.Where(x=>x.IsDeleted==false).ToList();
                    foreach (var item in result.ToList())
                    {
                        listx.Add(new Util
                        {
                            ID = item.ID,
                            Name = item.Name,
                            IsActive = item.IsActive,
                            IsDeleted = item.IsDeleted


                        });

                    }
                    
                }
                response.StatusCode = 200;
                response.Message = "Success";
                response.Data = listx;
             

            }
            
            catch(Exception ex)
            {

                response.StatusCode = 400;
                response.Message = ex.Message;
            }
            return response;
            
            
        }
        

        
        [HttpPost]
        public IHttpActionResult PostUtility(Util util)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var ctx = new sdirecttestdbEntities1())
                {
                    ctx.Utilities.Add(new Utility()
                    {
                        Name = util.Name,
                        CreatedDate = System.DateTime.Now,
                        ModifiedDate = System.DateTime.Now,
                        IsDeleted = false,
                        IsActive = false,
                        CreatedBy = Environment.UserName,
                        ModifiedBy = Environment.UserName
                    
                    


                    });
                    ctx.SaveChanges();
                }
                res.StatusCode = 200;
                res.Message = "Success";

            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
            }
            return Ok(res);
        }
        [HttpPut]
        public IHttpActionResult PutUtility(Util util)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                using (var ctx = new sdirecttestdbEntities1())
                {
                    var existingUtility = ctx.Utilities.Where(s => s.ID == util.ID)
                                                            .FirstOrDefault<Utility>();

                    if (existingUtility != null)
                    {
                        existingUtility.Name = util.Name;
                        existingUtility.ModifiedDate = System.DateTime.Now;
                        existingUtility.ModifiedBy = Environment.UserName;
                       


                        //var uti = ctx.Checklist_Utility.Where(x => x.U_ID == util.ID).FirstOrDefault();

                        //uti.IsActive = true;

                        ctx.SaveChanges();
                    }
                    else
                    {
                        return NotFound();
                    }
                }
                response.StatusCode = 200;
                response.Message = "Success";


            }
            catch(Exception ex)
            {
                response.StatusCode = 400;
                response.Message = ex.Message;

            }
            return Ok(response);
        }
        
        
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {


                if (id <= 0)
                    return BadRequest("Not a valid id");

                using (var ctx = new sdirecttestdbEntities1())
                {
                    var utility = ctx.Utilities
                        .Where(s => s.ID == id)
                        .FirstOrDefault();

                    //ctx.Entry(utility).State = System.Data.Entity.EntityState.Deleted;
                    utility.IsDeleted = true;
                    utility.ModifiedBy = Environment.UserName;
                    utility.ModifiedDate = System.DateTime.Now;
                    ctx.SaveChanges();
                }
                response.StatusCode = 200;
                response.Message = "Success";
            }
            catch(Exception ex)
            {
                response.StatusCode = 400;
                response.Message = ex.Message; 
            }

            return Ok(response);
        }
        
       


    }
}
