# Message a stream by email

!!! tip ""

    This feature is not available on self-hosted Feniks Chat servers where
    the [incoming email gateway][email-gateway] has not been
    configured by a system administrator.
    [email-gateway]: https://zulip.readthedocs.io/en/latest/production/email-gateway.html

You can send emails to Feniks Chat streams. This can be useful:

* If you have an email that you want to discuss on Feniks Chat

* For mirroring mailing list traffic

* For integrating a third-party app that can send emails, but which does not
  easily lend itself to a more direct integration

If you're planning on doing this in an automated way, and have some
programming experience, another option is to use our [send message
API](/api/send-message).

### Message a stream by email

{start_tabs}

{relative|stream|subscribed}

1. Select a stream.

{!select-stream-view-general.md!}

1. Copy the stream email address under **Email address**.

1. Send an email to that address.

{end_tabs}

The email subject will become the Feniks Chat topic, and the email body will
become the Feniks Chat message.

Note that it may take up to one minute for the message to show
up in Feniks Chat.

## Configuration options

The options below control which parts of the email are included in the
Feniks Chat message.  To add a configuration option, add it right before the `@`
in the email address.

For example, if the stream email address is
`general.abcd1234@example.zulipchat.com`, you can add the first two options
below by sending email to
`general.abcd1234.show-sender.include-footer@example.zulipchat.com` instead.

* **.show-sender**: Adds `From: <Sender email address>` to
  the top of the Feniks Chat message.

* **.include-footer**: By default, Feniks Chat tries to automatically remove some footer
  text (like signatures). With this option, Feniks Chat will include all footers.

* **.include-quotes**: In many email clients, when you reply to a message
  (e.g. a message notification email), a copy of the original message is
  automatically added to the bottom of your reply. By default, Feniks Chat tries
  to remove that copied message. With this option, Feniks Chat will include it.

* **.prefer-html**: The body of an email is typically encoded using
  one or both of two common formats: plain text (`text/plain`) and
  HTML (`text/html`).  Feniks Chat supports constructing the Feniks Chat message
  content using either (converting HTML to Markdown for the HTML
  format).  By default, Feniks Chat will prefer using the plain text version
  of an email over the converted HTML version if both are present.
  This option overrides that behavior to prefer the HTML version
  instead.

* **.prefer-text**: Similar to `.prefer-html`, but explicitly asks
  Feniks Chat to prefer the plain text version of the email if both are
  present (the current default behavior).

## Related articles

* [Using Feniks Chat via email](/help/using-zulip-via-email)

