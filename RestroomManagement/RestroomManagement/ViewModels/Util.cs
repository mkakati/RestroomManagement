using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestroomManagement.ViewModels
{
    public class Util
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public Nullable<bool> IsDeleted { get; set; }

        public Nullable<bool> IsActive { get; set; }

        public Nullable<System.DateTime> CreatedDate { get; set; }

        public Nullable<System.DateTime> ModifiedDate { get; set; }

        public string CreatedBy { get; set; }

        public string ModifiedBy { get; set; }

    }
}



