using BusinessLayer.Abstract;
using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;

namespace BusinessLayer.Concrete
{
    public class UserManager : IUserService
    {
        private readonly IUserDal _userDal;

        public UserManager(IUserDal userDal)
        {
            _userDal = userDal;
        }

        public void Delete(User t)
        {
            _userDal.Delete(t);
        }

        public User GetElementById(int id)
        {
            return _userDal.GetElementById(id);
        }

        public List<User> GetListAll()
        {
            return _userDal.GetListAll();
        }

        public void Insert(User t)
        {
            _userDal.Insert(t);
        }

        public void Update(User t)
        {
            _userDal.Update(t);
        }
    }
}
