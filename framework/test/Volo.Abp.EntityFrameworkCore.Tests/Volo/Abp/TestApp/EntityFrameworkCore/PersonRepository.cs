﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.TestApp.Domain;

namespace Volo.Abp.TestApp.EntityFrameworkCore
{
    public class PersonRepository : EfCoreRepository<TestAppDbContext, Person, Guid>, IPersonRepository
    {
        public PersonRepository(IDbContextProvider<TestAppDbContext> dbContextProvider)
            : base(dbContextProvider)
        {
        }

        public async Task<PersonView> GetViewAsync(Guid id)
        {
            return await DbContext.PersonView.Where(x => x.Id == id).FirstOrDefaultAsync();
        }
    }
}