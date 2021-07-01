#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use napi::{CallContext, JsBoolean, JsObject, JsString, Result};
use rpassword::prompt_password_stdout;
use rprompt::prompt_reply_stdout;

#[cfg(all(
    unix,
    not(target_env = "musl"),
    not(target_arch = "aarch64"),
    not(target_arch = "arm"),
    not(debug_assertions)
))]
#[global_allocator]
static ALLOC: jemallocator::Jemalloc = jemallocator::Jemalloc;

#[cfg(all(windows, target_arch = "x86_64"))]
#[global_allocator]
static ALLOC: mimalloc::MiMalloc = mimalloc::MiMalloc;

#[js_function(2)]
fn prompt(ctx: CallContext) -> Result<JsString> {
    let msg = ctx.get::<JsString>(0)?.into_utf8()?;
    let password = ctx.get::<JsBoolean>(1)?.get_value()? || false;

    let res;

    if password {
        let input = prompt_password_stdout(msg.as_str()?).unwrap();

        res = input.to_string();
    } else {
        let input = prompt_reply_stdout(msg.as_str()?).unwrap();

        res = input.to_string();
    }

    ctx.env.create_string(res.as_str())
}

#[module_exports]
fn init(mut exports: JsObject) -> Result<()> {
    exports.create_named_method("prompt", prompt)?;

    Ok(())
}
