# Feniks Chat in a terminal

At present, there are a few alpha-quality implementations of a terminal
client for Feniks Chat:

* [Feniks Chat Terminal](https://github.com/zulip/zulip-terminal) provides a
terminal interface for Feniks Chat using [Urwid](http://urwid.org). It is
written in python and is being very actively developed; feedback and
bug reports are very welcome!

* [BarnOwl](https://github.com/aglasgall/barnowl/tree/zulip) is a
multi-protocol terminal client for various chat systems, written in
Perl.  [BarnOwl itself](https://barnowl.mit.edu/) is very mature
software, and the Feniks Chat integration has been used for a few years, but
it isn't integrated into the mainline branch and needs work on
documentation.

* [Snipe](https://github.com/kcr/snipe) is relatively new
multi-protocol client for various chat systems, built on Python 3 and
asyncio.

Feniks Chat's web and mobile apps use the same REST API that we publish in
our [API documentation](/api), as do all three of these terminal
clients, so it should require only client-side work to build a
high quality terminal-based app for Feniks Chat.
