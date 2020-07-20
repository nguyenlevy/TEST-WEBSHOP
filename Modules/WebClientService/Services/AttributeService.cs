
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using WebClient.Core;
using WebClientService.Models;

namespace WebClientService.Services
{
   public class AttributeService: IAttributeService
    {
        private readonly IUnitOfWorkWebClient _unitOfWork;
        private readonly IMapper _mapper;
        public AttributeService(
            IUnitOfWorkWebClient unitOfWork,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public IQueryable<Attribute> GetById(int id)
        { 
            return _unitOfWork.AttributeRepository.FindByCondition(p => p.Id == id);
        }

        public async Task<List<AttributeList>> GetAll()
        {
            var Attribute = await _unitOfWork.AttributeRepository.FindAll().ToListAsync();
            var AtributeValue = await _unitOfWork.AttributeValueRepository.FindAll().ToArrayAsync();

            List<AttributeList> listAttribute = new List<AttributeList>();
            foreach (var AttributeObj in Attribute)
            {
                AttributeList DataAttribute = new AttributeList();
                List<AttributeValueData> listChildAttribute = new List<AttributeValueData>();
                DataAttribute.AttributeId = AttributeObj.Id;
                DataAttribute.AttributeLabel = AttributeObj.Label;
                foreach (var AttributeValuObj in AtributeValue)
                {
                    if (AttributeObj.Id == AttributeValuObj.AttributeId)
                    {
                        AttributeValueData DataAttributeValue = new AttributeValueData();
                        DataAttributeValue.AttributeValueId = AttributeValuObj.Id;
                        DataAttributeValue.AttributeLabel = AttributeValuObj.Label;
                        DataAttributeValue.AttributeId = AttributeValuObj.AttributeId;
                        listChildAttribute.Add(DataAttributeValue);
                    }
                }

                DataAttribute.listAttributeValue = listChildAttribute;
                listAttribute.Add(DataAttribute);
            }
            return listAttribute;
        }

    }
}
