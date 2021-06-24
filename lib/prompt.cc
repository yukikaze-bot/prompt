#include <iostream>
#include <napi.h>

using namespace Napi;

Value Prompt(const CallbackInfo &info) {
    Env env = info.Env();

    if (info.Length() < 1) {
        Error::New(env, "Prompt message is empty.").ThrowAsJavaScriptException();

        return env.Null();
    }

    if (!info[0].IsString()) {
        TypeError::New(env, "Prompt message is not a string.").ThrowAsJavaScriptException();

        return env.Null();
    }

    std::string str = info[0].ToString().Utf8Value();

    const char *question = str.c_str();

    std::string response;
    std::cout << question;
    std::getline(std::cin, response);

    return String::New(env, response);
}

Object Init(Env env, Object exports) {
    exports.Set(String::New(env, "prompt"), Function::New(env, Prompt));

    return exports;
}

NODE_API_MODULE(prompt, Init)
