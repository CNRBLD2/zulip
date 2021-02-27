import * as people from "./people";

function rerender_messages_view() {
    for (const list of [home_msg_list, message_list.narrowed, message_list.all]) {
        if (list === undefined) {
            continue;
        }
        if (list.table_name !== undefined) {
            list.rerender_view();
        }
    }
}

export function update_stream_name(stream_id, new_name) {
    message_store.update_property("stream_name", new_name, {stream_id});
    rerender_messages_view();
}

export function update_user_full_name(user_id, full_name) {
    message_store.update_property("sender_full_name", full_name, {user_id});
    rerender_messages_view();
}

export function update_avatar(user_id, avatar_url) {
    let url = avatar_url;
    url = people.format_small_avatar_url(url);
    message_store.update_property("small_avatar_url", url, {user_id});
    rerender_messages_view();
}
