using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiParivarCode.Model
{
    [Table("UserLogin")]
    public class UserLogin
    {
        public int UserLoginID { get; set; }

        public decimal? Mobile { get; set; }

        public int OTP { get; set; }

        public DateTime ModifiedDate { get; set; }

        public bool IsLoginSuccess { get; set; }

        public int LoginAttemp { get; set; }      

    }
}
