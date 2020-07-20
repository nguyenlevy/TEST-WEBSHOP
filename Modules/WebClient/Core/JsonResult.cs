namespace Core.Core
{
    public class ApiJsonResult
    {
        public ApiJsonResult()
        {
            Code = CodeModel.Success;
        }
        public object Data { get; set; }
        public string Message { get; set; }
        public CodeModel Code { get; set; }
    }

    public enum CodeModel
    {
        Success,
        Fail
    }
}
