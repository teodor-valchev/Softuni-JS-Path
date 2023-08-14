import { getUserData } from "../util.js";

export function addSession(ctx,next){  /// session проверява дали има user
    ctx.user = getUserData()
    next()
}