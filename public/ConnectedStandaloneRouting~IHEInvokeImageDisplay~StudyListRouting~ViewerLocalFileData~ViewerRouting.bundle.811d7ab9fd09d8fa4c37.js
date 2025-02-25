(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1069: function(e, t, r) {
      'use strict';
      var n = r(0),
        a = r.n(n),
        o = r(130),
        s = r(82),
        c = r(38),
        l = r(1),
        i = r.n(l),
        u = r(19),
        f = r.n(u),
        m = r(14),
        d = ['ctrl', 'alt', 'shift'],
        p = {
          '': [],
          alt: ['space'],
          shift: [],
          ctrl: [
            'f4',
            'f5',
            'f11',
            'w',
            'r',
            't',
            'o',
            'p',
            'a',
            'd',
            'f',
            'g',
            'h',
            'j',
            'l',
            'z',
            'x',
            'c',
            'v',
            'b',
            'n',
            'pagedown',
            'pageup',
          ],
          'ctrl+shift': ['q', 'w', 'r', 't', 'p', 'a', 'h', 'v', 'b', 'n'],
        },
        y = function(e) {
          return e.join('+');
        },
        v =
          "It's not possible to define only modifier keys (ctrl, alt and shift) as a shortcut",
        b = "Field can't be empty.",
        h = [
          function(e) {
            var t = e.pressedKeys;
            if (!(void 0 === t ? [] : t).length)
              return { hasError: !0, errorMessage: b };
          },
          function(e) {
            var t = e.pressedKeys,
              r = t[t.length - 1];
            if (d.includes(r)) return { hasError: !0, errorMessage: v };
          },
          function(e) {
            var t = e.commandName,
              r = e.pressedKeys,
              n = (function(e, t, r) {
                var n = void 0,
                  a = y(r);
                for (var o in e) {
                  var s = e[o].keys;
                  if (a === y(s) && o !== t) {
                    n = e[o];
                    break;
                  }
                }
                return n;
              })(e.hotkeys, t, r);
            if (n)
              return {
                hasError: !0,
                errorMessage: '"'
                  .concat(n.label, '" is already using the "')
                  .concat(r, '" shortcut.'),
              };
          },
          function(e) {
            var t = e.pressedKeys,
              r = void 0 === t ? [] : t,
              n = r[r.length - 1],
              a = y(r.slice(0, r.length - 1)),
              o = p[a];
            if (!!o && o.includes(n))
              return {
                hasError: !0,
                errorMessage: '"'.concat(
                  y(r),
                  '" shortcut combination is not allowed'
                ),
              };
          },
        ],
        g = r(272);
      r(1075);
      function w(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function(e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      function O(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
            )
              return;
            var r = [],
              n = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var s, c = e[Symbol.iterator]();
                !(n = (s = c.next()).done) &&
                (r.push(s.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                n || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      function E(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(r, !0).forEach(function(t) {
                k(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : E(r).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function k(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var N = function(e) {
          return { hotkeys: j({}, e), errors: {} };
        },
        P = function(e) {
          var t = e.commandName,
            r = e.pressedKeys,
            n = e.hotkeys,
            a = !0,
            o = !1,
            s = void 0;
          try {
            for (
              var c, l = h[Symbol.iterator]();
              !(a = (c = l.next()).done);
              a = !0
            ) {
              var i = (0, c.value)({
                commandName: t,
                pressedKeys: r,
                hotkeys: n,
              });
              if (i && i.hasError) return i;
            }
          } catch (e) {
            (o = !0), (s = e);
          } finally {
            try {
              a || null == l.return || l.return();
            } finally {
              if (o) throw s;
            }
          }
          return { errorMessage: void 0 };
        },
        S = function(e) {
          var t = [],
            r = Object.entries(e);
          if (r.length) {
            var n = Math.ceil(r.length / 2);
            t.push(r.slice(0, n)), t.push(r.slice(n, r.length));
          }
          return t;
        };
      function C(e) {
        var t = e.onClose,
          r = Object(c.c)('UserPreferencesModal').t,
          o = g.d.hotkeyDefaults,
          s = g.d.hotkeyDefinitions,
          l = O(Object(n.useState)(N(s)), 2),
          i = l[0],
          u = l[1],
          p = Object(m.R)(),
          y = Object.keys(i.errors).some(function(e) {
            return !!i.errors[e];
          }),
          v = Object.keys(i.hotkeys).length,
          b = S(i.hotkeys);
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'HotkeysPreferences' },
            v
              ? a.a.createElement(
                  'div',
                  { className: 'hotkeyTable' },
                  b.map(function(e, t) {
                    return a.a.createElement(
                      'div',
                      { className: 'hotkeyColumn', key: t },
                      a.a.createElement(
                        'div',
                        { className: 'hotkeyHeader' },
                        a.a.createElement(
                          'div',
                          { className: 'headerItemText text-right' },
                          'Function'
                        ),
                        a.a.createElement(
                          'div',
                          { className: 'headerItemText text-center' },
                          'Shortcut'
                        )
                      ),
                      e.map(function(e) {
                        var t = e[0],
                          r = e[1],
                          n = r.keys,
                          o = r.label,
                          s = i.errors[e[0]];
                        return a.a.createElement(
                          'div',
                          { key: t, className: 'hotkeyRow' },
                          a.a.createElement(
                            'div',
                            { className: 'hotkeyLabel' },
                            o
                          ),
                          a.a.createElement(
                            'div',
                            {
                              'data-key': 'defaultTool',
                              className: f()(
                                'wrapperHotkeyInput',
                                s ? 'stateError' : ''
                              ),
                            },
                            a.a.createElement(m.j, {
                              keys: n,
                              modifier_keys: d,
                              handleChange: function(e) {
                                !(function(e, t, r) {
                                  var n = P({
                                    commandName: e,
                                    pressedKeys: r,
                                    hotkeys: i.hotkeys,
                                  }).errorMessage;
                                  u(function(a) {
                                    return {
                                      hotkeys: j(
                                        {},
                                        a.hotkeys,
                                        k({}, e, j({}, t, { keys: r }))
                                      ),
                                      errors: j({}, a.errors, k({}, e, n)),
                                    };
                                  });
                                })(t, r, e);
                              },
                              classNames: 'preferencesInput',
                            }),
                            a.a.createElement(
                              'span',
                              { className: 'preferencesInputErrorMessage' },
                              s
                            )
                          )
                        );
                      })
                    );
                  })
                )
              : 'Hotkeys definitions is empty'
          ),
          a.a.createElement(m.D, {
            onResetPreferences: function() {
              var e = {};
              o.map(function(t) {
                var r = t.commandName,
                  n = w(t, ['commandName']);
                e[r] = j({}, n);
              }),
                u(N(e));
            },
            onSave: function() {
              var e = i.hotkeys;
              g.d.setHotkeys(e),
                localStorage.setItem('hotkey-definitions', JSON.stringify(e)),
                t(),
                p.show({ message: r('SaveMessage'), type: 'success' });
            },
            onCancel: t,
            hasErrors: y,
            t: r,
          })
        );
      }
      C.propTypes = { onClose: i.a.func };
      var L = r(63),
        I = r(261);
      r(1076);
      function T(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(r, !0).forEach(function(t) {
                M(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : T(r).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function M(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function x(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
            )
              return;
            var r = [],
              n = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var s, c = e[Symbol.iterator]();
                !(n = (s = c.next()).done) &&
                (r.push(s.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                n || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      var D = I.a.actions;
      function R(e) {
        var t = e.onClose,
          r = Object(L.c)(),
          o = Object(L.d)(function(e) {
            var t = e.preferences;
            return (void 0 === t ? {} : t).windowLevelData;
          }),
          s = x(Object(n.useState)({ values: A({}, o) }), 2),
          l = s[0],
          i = s[1],
          u = Object(c.c)('UserPreferencesModal').t,
          f = Object(m.R)(),
          d = function(e) {
            var t = e.target,
              r = t.dataset,
              n = r.key,
              a = r.inputname,
              o = t.value;
            l.values[n] &&
              l.values[n][a] &&
              i(function(e) {
                return A({}, e, {
                  values: A(
                    {},
                    e.values,
                    M({}, n, A({}, e.values[n], M({}, a, o)))
                  ),
                });
              });
          };
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'WindowLevelPreferences' },
            a.a.createElement(
              'div',
              { className: 'wlColumn' },
              a.a.createElement(
                'div',
                { className: 'wlRow header' },
                a.a.createElement(
                  'div',
                  { className: 'wlColumn preset' },
                  'Preset'
                ),
                a.a.createElement(
                  'div',
                  { className: 'wlColumn description' },
                  'Description'
                ),
                a.a.createElement(
                  'div',
                  { className: 'wlColumn window' },
                  'Window'
                ),
                a.a.createElement(
                  'div',
                  { className: 'wlColumn level' },
                  'Level'
                )
              ),
              Object.keys(l.values).map(function(e, t) {
                return a.a.createElement(
                  'div',
                  { className: 'wlRow', key: e },
                  a.a.createElement('div', { className: 'wlColumn preset' }, e),
                  a.a.createElement(
                    'div',
                    { className: 'wlColumn description' },
                    a.a.createElement('input', {
                      type: 'text',
                      className: 'preferencesInput',
                      value: l.values[e].description,
                      'data-key': e,
                      'data-inputname': 'description',
                      onChange: d,
                    })
                  ),
                  a.a.createElement(
                    'div',
                    { className: 'wlColumn window' },
                    a.a.createElement('input', {
                      type: 'number',
                      className: 'preferencesInput',
                      value: l.values[e].window,
                      'data-key': e,
                      'data-inputname': 'window',
                      onChange: d,
                    })
                  ),
                  a.a.createElement(
                    'div',
                    { className: 'wlColumn level' },
                    a.a.createElement('input', {
                      type: 'number',
                      className: 'preferencesInput',
                      value: l.values[e].level,
                      'data-key': e,
                      'data-inputname': 'level',
                      onChange: d,
                    })
                  )
                );
              })
            )
          ),
          a.a.createElement(m.D, {
            onResetPreferences: function() {},
            onSave: function() {
              r(D.setUserPreferences({ windowLevelData: l.values })),
                t(),
                f.show({ message: u('SaveMessage'), type: 'success' });
            },
            onCancel: t,
            hasErrors: !1,
            t: u,
          })
        );
      }
      R.propTypes = { onClose: i.a.func };
      var F = r(120);
      r(1077);
      function H(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
            )
              return;
            var r = [],
              n = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var s, c = e[Symbol.iterator]();
                !(n = (s = c.next()).done) &&
                (r.push(s.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                n || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      function K(e) {
        var t = e.onClose,
          r = Object(c.c)('UserPreferencesModal').t,
          o = Object(m.R)(),
          s = F.a.language,
          l = F.a.availableLanguages,
          i = H(Object(n.useState)(s), 2),
          u = i[0],
          f = i[1];
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'GeneralPreferences' },
            a.a.createElement(
              'div',
              { className: 'language' },
              a.a.createElement(
                'label',
                { htmlFor: 'language-select', className: 'languageLabel' },
                'Language'
              ),
              a.a.createElement(m.l, {
                language: u,
                onLanguageChange: f,
                languages: l,
              })
            )
          ),
          a.a.createElement(m.D, {
            onResetPreferences: function() {
              f(F.a.defaultLanguage);
            },
            onSave: function() {
              F.a.changeLanguage(u),
                t(),
                o.show({ message: r('SaveMessage'), type: 'success' });
            },
            onCancel: t,
            hasErrors: !1,
            t: r,
          })
        );
      }
      K.propTypes = { onClose: i.a.func };
      r(1078);
      var U = [
        { name: 'Hotkeys', Component: C, customProps: {} },
        { name: 'General', Component: K, customProps: {} },
        { name: 'Window Level', Component: R, customProps: {} },
      ];
      function G(e) {
        var t = { onClose: e.hide };
        return a.a.createElement(m.C, { tabs: U, customProps: t });
      }
      G.propTypes = { hide: i.a.func };
      var V = r(513);
      r(1079);
      function q(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
            )
              return;
            var r = [],
              n = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var s, c = e[Symbol.iterator]();
                !(n = (s = c.next()).done) &&
                (r.push(s.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                n || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      function J(e) {
        var t = e.t,
          r = e.user,
          s = e.userManager,
          c = e.modal.show,
          l = e.useLargeLogo,
          i = e.linkPath,
          u = e.linkText,
          d = e.location,
          p = e.children,
          y = q(Object(n.useState)([]), 2),
          v = y[0],
          b = y[1],
          h = u && i;
        return (
          Object(n.useEffect)(
            function() {
              var e = [
                {
                  title: t('About'),
                  icon: { name: 'info' },
                  onClick: function() {
                    return c({ content: m.a, title: t('neuro42 DICOM Viewer - About') });
                  },
                },
                {
                  title: t('Preferences'),
                  icon: { name: 'user' },
                  onClick: function() {
                    return c({ content: G, title: t('User Preferences') });
                  },
                },
              ];
              r &&
                s &&
                e.push({
                  title: t('Logout'),
                  icon: { name: 'power-off' },
                  onClick: function() {
                    return s.signoutRedirect();
                  },
                }),
                b(e);
            },
            [b, c, t, r, s]
          ),
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              'div',
              { className: 'notification-bar' },
              t('neuro42')
            ),
            a.a.createElement(
              'div',
              { className: f()('entry-header', { 'header-big': l }) },
              a.a.createElement(
                'div',
                { className: 'header-left-box' },
                d &&
                  d.studyLink &&
                  a.a.createElement(
                    o.b,
                    {
                      to: d.studyLink,
                      className: 'header-btn header-viewerLink',
                    },
                    t('Back to Viewer')
                  ),
                p,
                h &&
                  a.a.createElement(
                    o.b,
                    {
                      className: 'header-btn header-studyListLinkSection',
                      to: { pathname: i, state: { studyLink: d.pathname } },
                    },
                    t(u)
                  )
              ),
              a.a.createElement(
                'div',
                { className: 'header-menu' },
                a.a.createElement(
                  'span',
                  { className: 'research-use' },
                  t('neuro42')
                ),
                a.a.createElement(m.f, {
                  title: t('Options'),
                  list: v,
                  align: 'right',
                })
              )
            )
          )
        );
      }
      (J.propTypes = {
        linkText: i.a.string,
        linkPath: i.a.string,
        useLargeLogo: i.a.bool,
        location: i.a.object.isRequired,
        children: i.a.node,
        t: i.a.func.isRequired,
        userManager: i.a.object,
        user: i.a.object,
        modal: i.a.object,
      }),
        (J.defaultProps = { useLargeLogo: !1, children: Object(V.a)() });
      var W = Object(c.d)(['Header', 'AboutModal'])(
          Object(s.g)(Object(m.T)(J))
        ),
        Y = Object(L.b)(function(e) {
          return { user: e.oidc && e.oidc.user };
        })(W);
      t.a = Y;
    },
    1075: function(e, t, r) {},
    1076: function(e, t, r) {},
    1077: function(e, t, r) {},
    1078: function(e, t, r) {},
    1079: function(e, t, r) {},
  },
]);
//# sourceMappingURL=ConnectedStandaloneRouting~IHEInvokeImageDisplay~StudyListRouting~ViewerLocalFileData~ViewerRouting.bundle.811d7ab9fd09d8fa4c37.js.map
