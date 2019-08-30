using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestroomManagement.ViewModels
{
    public class ResponseModel
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public dynamic Data { get; set; }
    }
}