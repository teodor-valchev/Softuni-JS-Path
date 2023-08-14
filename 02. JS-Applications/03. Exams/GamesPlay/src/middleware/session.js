import { getUserData } from "../util.JS";

export function addSession(ctx,next){  /// session проверява дали има user
    ctx.user = getUserData()
    next()
}