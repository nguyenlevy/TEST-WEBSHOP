using System;

namespace Core.Core.Helper
{
    public class Constants
    {
        public static string CurrentUser = "update when intergrate login";
        public class MessageError
        {
            public const string DataExisted = "trùng dữ liệu";
            public const string DataInvalid = "dữ liệu sai";
            public const string DataNull = "bị null";
            public const string ServerError = "Lỗi server";
            public const string DeleteError = "Xóa thất bại";
            public const string UsernameOrPasswordInvalid = "Tên đăng nhập hoặc mật khẩu không đúng";
            public const string EmailExisted = "Địa chỉ email đã tồn tại";
            public const string DataNotExist = "Dữ liệu không tồn tại";
            public const string CapchaInvalid = "Mã bảo vệ không đúng";
            public const string ContactSent = "Gửi liên hệ thành công";
            public const string OldPasswordInvalid = "Mật khẩu cũ không đúng";
            public const string DataIsInUseNotAllowDelete = "Dữ liệu đang được sử dụng. Không được phép xóa";
            public const string FomularUniqueColumn = "Chỉ nhập dữ liệu cho 1 trong 3 cột: [Giá trị], [Tham chiếu], [Công thức]";
            public const string FomularError = "Công thức không đúng";
            public const string CalculateError = "Tính lương thất bại";
            public const string DataIsInUseOrLocked = "Dữ liệu đang được sử dụng hoặc đã khóa";
            public const string UpdateNotSuccess = "Cập nhật không thành không";
            public const string NotFound = "Không tìm thấy";
        }

        public class MessageSuccess
        {
            public const string UpdateSuccess = "Cập nhật thành công";
            public const string CreateSuccess = "Thêm thành công";
        }

        public static string GenerateCode()
        {
            return $"MP-{DateTime.Now.ToString("yyyy-MM-ddTHH:mm:ss")}";
        }
    }
}
