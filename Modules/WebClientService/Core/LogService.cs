using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Core.Core.Helper
{
    public class LogService
    {
        public static LogService Instance
        {
            get
            {
                return Nested.instance;
            }

        }

        class Nested
        {
            static Nested()
            {
            }
            internal static readonly LogService instance = new LogService();

        }

        private string basePath = AppDomain.CurrentDomain.BaseDirectory + "\\logs";
        private void WriteLog(string logs, string typeLog = "info")
        {
            try
            {
                logs = $"{DateTime.Now.ToString("dd-MM-yyyy HH:mm:ss")}|{logs}\r\n";
                string logFilePath = Path.GetFullPath($"{basePath}/{typeLog}-{DateTime.Today.ToString("dd-MM-yyyy")}.txt");
                FileInfo logFileInfo = new FileInfo(logFilePath);
                DirectoryInfo logDirInfo = new DirectoryInfo(logFileInfo.DirectoryName);
                if (!logDirInfo.Exists)
                    logDirInfo.Create();
                StringBuilder sb = new StringBuilder();
                sb.Append(logs);
                File.AppendAllText(logFilePath, sb.ToString());
                sb.Clear();
            }
            catch
            {
            }
        }

        public void Info(string logs)
        {
            Task.Run(() => WriteLog(logs, typeLog: "info"));
        }

        public void Error(string logs)
        {
            Task.Run(() => WriteLog(logs, typeLog: "error"));
        }

        public void Warning(string logs)
        {
            Task.Run(() => WriteLog(logs, typeLog: "warning"));
        }

        public void Exception(string logs)
        {
            Task.Run(() => WriteLog(logs, typeLog: "exception"));
        }
    }
}
