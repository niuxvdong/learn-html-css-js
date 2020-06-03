// 字符集：（Charset）是一个系统支持的所有抽象字符集合

// 字符编码：（Charset Encoding）: 字符集编解码规则

//      ASCII: American Standard Code for Information
//          128个 每个字符一个字节 缺点：太小
//      GB
//          GB2312：收录6763汉字，682字符；ASCII字符一个字节，新收录的两个字节；兼容ACSII
//                  变长字节
//          GBK
//                  兼容GB2312; 兼容Big5; 兼容ASCII
//                  ASCII一个字节，GBK字符两个字节
//                  变长字节
//          GB18030
//                  兼容GBK GB2312; 兼容Big5; 兼容ASCII
//                  ASCII一个字节，GB18030两个字节或四个字节

//      Unicode： 2到4个字节 下面这几个互不兼容
//          UTF-8：ASCII一个字节，其他2 - 6 字节 兼容ASCII 不兼容GB系列
//          UTF - 16：兼容UCS-2 UCS-4 2-4字节
//          UTF - 32：
//      UCS
//          UCS-2: 2字节，不兼容ASCII
//          UCS-4：4字节，不兼容ASCII，ASCII字符使用4字节表示
//                       不兼容UCS-2 UTF-16 兼容UTF-32


// 乱码：

// 浏览器：（JS引擎）通常是UCS-2字符集 支持部分UTF-16

// html css js 文件 通常为UTF-8
//      可能存在html css js 文件字符集为GBK的情况

// 当文件字符集处理文件程序时，字符集不同时，程序解码后文件不建议==具有可读性，成为乱码

