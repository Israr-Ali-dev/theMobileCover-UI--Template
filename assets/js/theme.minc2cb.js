(window.theme = window.theme || {}),
  console &&
    console.log &&
    (window.lazySizesConfig = window.lazySizesConfig || {}),
  (lazySizesConfig.expFactor = 4),
  (function (e) {
    function t() {
      var t,
        i,
        n = e.Deferred();
      return (
        (t = setInterval(function () {
          Vimeo && (clearInterval(t), clearTimeout(i), n.resolve());
        }, 500)),
        (i = setTimeout(function () {
          clearInterval(t), n.reject();
        }, 4e3)),
        n
      );
    }
    var e = (jQuery = e);
    (theme.utils = {
      defaultTo: function (e, t) {
        return null == e || e !== e ? t : e;
      },
    }),
      (theme.a11y = {
        trapFocus: function (t) {
          function i(e) {
            9 === e.keyCode &&
              (e.target !== s || e.shiftKey || (e.preventDefault(), a.focus()),
              e.target === a && e.shiftKey && (e.preventDefault(), s.focus()));
          }
          var n = {
              focusin: t.namespace ? 'focusin.' + t.namespace : 'focusin',
              focusout: t.namespace ? 'focusout.' + t.namespace : 'focusout',
              keydown: t.namespace
                ? 'keydown.' + t.namespace
                : 'keydown.handleFocus',
            },
            o = t.$container.find(
              e(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex^="-"])'
              ).filter(':visible')
            ),
            a = o[0],
            s = o[o.length - 1];
          t.$elementToFocus || (t.$elementToFocus = t.$container),
            t.$container.attr('tabindex', '-1'),
            t.$elementToFocus.focus(),
            e(document).off('focusin'),
            e(document).on(n.focusout, function () {
              e(document).off(n.keydown);
            }),
            e(document).on(n.focusin, function (t) {
              (t.target !== s && t.target !== a) ||
                e(document).on(n.keydown, function (e) {
                  i(e);
                });
            });
        },
        removeTrapFocus: function (t) {
          var i = t.namespace ? 'focusin.' + t.namespace : 'focusin';
          t.$container &&
            t.$container.length &&
            t.$container.removeAttr('tabindex'),
            e(document).off(i);
        },
        lockMobileScrolling: function (t, i) {
          if (i) var n = i;
          else var n = e(document.documentElement).add('body');
          n.on('touchmove' + t, function () {
            return !1;
          });
        },
        unlockMobileScrolling: function (t, i) {
          if (i) var n = i;
          else var n = e(document.documentElement).add('body');
          n.off(t);
        },
      }),
      (theme.Sections = function () {
        (this.constructors = {}),
          (this.instances = []),
          e(document)
            .on('themobilecase:section:load', this._onSectionLoad.bind(this))
            .on(
              'themobilecase:section:unload',
              this._onSectionUnload.bind(this)
            )
            .on('themobilecase:section:select', this._onSelect.bind(this))
            .on('themobilecase:section:deselect', this._onDeselect.bind(this))
            .on('themobilecase:block:select', this._onBlockSelect.bind(this))
            .on(
              'themobilecase:block:deselect',
              this._onBlockDeselect.bind(this)
            );
      }),
      (theme.Sections.prototype = e.extend({}, theme.Sections.prototype, {
        createInstance: function (t, i, n) {
          var o = e(t),
            a = o.attr('data-section-id'),
            s = o.attr('data-section-type');
          if (((i = i || this.constructors[s]), 'undefined' != typeof i)) {
            if (n) {
              var r = this._findInstance(a);
              if (r) return;
            }
            var d = e.extend(new i(t), { id: a, type: s, container: t });
            this.instances.push(d);
          }
        },
        _onSectionLoad: function (t, i, n) {
          AOS && AOS.refreshHard();
          var o = i ? i : e('[data-section-id]', t.target)[0];
          if (o) {
            this.createInstance(o);
            var a = i ? n : this._findInstance(t.detail.sectionId);
            i || this._loadSubSections(),
              a && 'function' == typeof a.onLoad && a.onLoad(t);
          }
        },
        _loadSubSections: function () {
          AOS && AOS.refreshHard(),
            e('[data-subsection]').each(
              function (t, i) {
                this._onSectionLoad(null, i, e(i).data('section-id'));
              }.bind(this)
            );
        },
        _onSectionUnload: function (e) {
          var t = this._removeInstance(e.detail.sectionId);
          t && 'function' == typeof t.onUnload && t.onUnload(e);
        },
        _onSelect: function (e) {
          var t = this._findInstance(e.detail.sectionId);
          t && 'function' == typeof t.onSelect && t.onSelect(e);
        },
        _onDeselect: function (e) {
          var t = this._findInstance(e.detail.sectionId);
          t && 'function' == typeof t.onDeselect && t.onDeselect(e);
        },
        _onBlockSelect: function (e) {
          var t = this._findInstance(e.detail.sectionId);
          t && 'function' == typeof t.onBlockSelect && t.onBlockSelect(e);
        },
        _onBlockDeselect: function (e) {
          var t = this._findInstance(e.detail.sectionId);
          t && 'function' == typeof t.onBlockDeselect && t.onBlockDeselect(e);
        },
        _findInstance: function (e) {
          for (var t = 0; t < this.instances.length; t++)
            if (this.instances[t].id === e) return this.instances[t];
        },
        _removeInstance: function (e) {
          for (var t, i = this.instances.length; i--; )
            if (this.instances[i].id === e) {
              (t = this.instances[i]), this.instances.splice(i, 1);
              break;
            }
          return t;
        },
        register: function (t, i, n) {
          this.constructors[t] = i;
          var o = e('[data-section-type=' + t + ']');
          n && (o = e('[data-section-type=' + t + ']', n)),
            o.each(
              function (e, t) {
                this.createInstance(t, i, n);
              }.bind(this)
            );
        },
      })),
      (theme.Currency = (function () {
        function e(e, t) {
          function n(e, t, i, n) {
            if (
              ((t = theme.utils.defaultTo(t, 2)),
              (i = theme.utils.defaultTo(i, ',')),
              (n = theme.utils.defaultTo(n, '.')),
              isNaN(e) || null == e)
            )
              return 0;
            e = (e / 100).toFixed(t);
            var o = e.split('.'),
              a = o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + i),
              s = o[1] ? n + o[1] : '';
            return a + s;
          }
          t || (t = theme.settings.moneyFormat),
            'string' == typeof e && (e = e.replace('.', ''));
          var o = '',
            a = /\{\{\s*(\w+)\s*\}\}/,
            s = t || i;
          switch (s.match(a)[1]) {
            case 'amount':
              o = n(e, 2);
              break;
            case 'amount_no_decimals':
              o = n(e, 0);
              break;
            case 'amount_with_comma_separator':
              o = n(e, 2, '.', ',');
              break;
            case 'amount_no_decimals_with_comma_separator':
              o = n(e, 0, '.', ',');
              break;
            case 'amount_no_decimals_with_space_separator':
              o = n(e, 0, ' ');
          }
          return s.replace(a, o);
        }
        function t(e) {
          if (
            e &&
            e.unit_price_measurement &&
            e.unit_price_measurement.reference_value
          )
            return 1 === e.unit_price_measurement.reference_value
              ? e.unit_price_measurement.reference_unit
              : e.unit_price_measurement.reference_value +
                  e.unit_price_measurement.reference_unit;
        }
        var i = '${{amount}}';
        return { formatMoney: e, getBaseUnit: t };
      })()),
      (theme.Images = (function () {
        function e(e) {
          if (!e) return '620x';
          var t = e.match(
            /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/
          );
          return null !== t ? t[1] : null;
        }
        function t(e, t) {
          if (!e) return e;
          if (null == t) return e;
          if ('master' === t) return this.removeProtocol(e);
          var i = e.match(
            /\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i
          );
          if (null != i) {
            var n = e.split(i[0]),
              o = i[0];
            return this.removeProtocol(n[0] + '_' + t + o);
          }
          return null;
        }
        function i(e) {
          return e.replace(/http(s)?:/, '');
        }
        return { imageSize: e, getSizedImageUrl: t, removeProtocol: i };
      })()),
      (theme.Variants = (function () {
        function t(t) {
          (this.$container = t.$container),
            (this.variants = t.variants),
            (this.singleOptionSelector = t.singleOptionSelector),
            (this.originalSelectorId = t.originalSelectorId),
            (this.enableHistoryState = t.enableHistoryState),
            (this.currentVariant = this._getVariantFromOptions()),
            e(this.singleOptionSelector, this.$container).on(
              'change',
              this._onSelectChange.bind(this)
            );
        }
        return (
          (t.prototype = e.extend({}, t.prototype, {
            _getCurrentOptions: function () {
              var t = e.map(
                e(this.singleOptionSelector, this.$container),
                function (t) {
                  var i = e(t),
                    n = i.attr('type'),
                    o = {};
                  return 'radio' === n || 'checkbox' === n
                    ? !!i[0].checked &&
                        ((o.value = i.val()), (o.index = i.data('index')), o)
                    : ((o.value = i.val()), (o.index = i.data('index')), o);
                }
              );
              return (t = this._compact(t));
            },
            _getVariantFromOptions: function () {
              var e = this._getCurrentOptions(),
                t = this.variants,
                i = !1;
              return (
                t.forEach(function (t) {
                  var n = !0;
                  t.options;
                  e.forEach(function (e) {
                    n && (n = t[e.index] === e.value);
                  }),
                    n && (i = t);
                }),
                i || null
              );
            },
            _onSelectChange: function () {
              var e = this._getVariantFromOptions();
              this.$container.trigger({ type: 'variantChange', variant: e }),
                e &&
                  (this._updateMasterSelect(e),
                  this._updateImages(e),
                  this._updatePrice(e),
                  this._updateUnitPrice(e),
                  this._updateSKU(e),
                  (this.currentVariant = e),
                  this.enableHistoryState && this._updateHistoryState(e));
            },
            _updateImages: function (e) {
              var t = e.featured_image || {},
                i = this.currentVariant.featured_image || {};
              e.featured_image &&
                t.src !== i.src &&
                this.$container.trigger({
                  type: 'variantImageChange',
                  variant: e,
                });
            },
            _updatePrice: function (e) {
              (e.price === this.currentVariant.price &&
                e.compare_at_price === this.currentVariant.compare_at_price) ||
                this.$container.trigger({
                  type: 'variantPriceChange',
                  variant: e,
                });
            },
            _updateUnitPrice: function (e) {
              e.unit_price !== this.currentVariant.unit_price &&
                this.$container.trigger({
                  type: 'variantUnitPriceChange',
                  variant: e,
                });
            },
            _updateSKU: function (e) {
              e.sku !== this.currentVariant.sku &&
                this.$container.trigger({
                  type: 'variantSKUChange',
                  variant: e,
                });
            },
            _updateHistoryState: function (e) {
              if (history.replaceState && e) {
                var t =
                  window.location.protocol +
                  '//' +
                  window.location.host +
                  window.location.pathname +
                  '?variant=' +
                  e.id;
                window.history.replaceState({ path: t }, '', t);
              }
            },
            _updateMasterSelect: function (t) {
              e(this.originalSelectorId, this.$container).val(t.id);
            },
            _compact: function (e) {
              for (
                var t = -1, i = null == e ? 0 : e.length, n = 0, o = [];
                ++t < i;

              ) {
                var a = e[t];
                a && (o[n++] = a);
              }
              return o;
            },
          })),
          t
        );
      })()),
      (theme.rte = {
        init: function () {
          theme.rte.wrapTable(), theme.rte.wrapVideo(), theme.rte.imageLinks();
        },
        wrapTable: function () {
          e('.rte table').wrap('<div class="table-wrapper"></div>');
        },
        wrapVideo: function () {
          var t = e(
              '.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"]'
            ),
            i = t.add('iframe#admin_bar_iframe');
          t.each(function () {
            e(this).parents('.video-wrapper').length ||
              e(this).wrap('<div class="video-wrapper"></div>');
          }),
            i.each(function () {
              this.src = this.src;
            });
        },
        imageLinks: function () {
          e('.rte a img').parent().addClass('rte__image');
        },
      }),
      (theme.LibraryLoader = (function () {
        function e(e, a) {
          var r = s[e];
          if (r && r.status !== o.requested) {
            if (((a = a || function () {}), r.status === o.loaded))
              return void a();
            r.status = o.requested;
            var d;
            switch (r.type) {
              case n.script:
                d = t(r, a);
                break;
              case n.link:
                d = i(r, a);
            }
            (d.id = r.tagId), (r.element = d);
            var c = document.getElementsByTagName(r.type)[0];
            c.parentNode.insertBefore(d, c);
          }
        }
        function t(e, t) {
          var i = document.createElement('script');
          return (
            (i.src = e.src),
            i.addEventListener('load', function () {
              (e.status = o.loaded), t();
            }),
            i
          );
        }
        function i(e, t) {
          var i = document.createElement('link');
          return (
            (i.href = e.src),
            (i.rel = 'stylesheet'),
            (i.type = 'text/css'),
            i.addEventListener('load', function () {
              (e.status = o.loaded), t();
            }),
            i
          );
        }
        var n = { link: 'link', script: 'script' },
          o = { requested: 'requested', loaded: 'loaded' },
          a = 'https://cdn.themobilecase.com/themobilecasecloud/',
          s = {
            youtubeSdk: {
              tagId: 'youtube-sdk',
              src: 'https://www.youtube.com/iframe_api',
              type: n.script,
            },
            themobilecaseXr: {
              tagId: 'themobilecase-model-viewer-xr',
              src: a + 'themobilecase-xr-js/assets/v1.0/themobilecase-xr.en.js',
              type: n.script,
            },
            modelViewerUi: {
              tagId: 'themobilecase-model-viewer-ui',
              src: a + 'model-viewer-ui/assets/v1.0/model-viewer-ui.en.js',
              type: n.script,
            },
            modelViewerUiStyles: {
              tagId: 'themobilecase-model-viewer-ui-styles',
              src: a + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
              type: n.link,
            },
          };
        return { load: e };
      })()),
      (theme.Modals = (function () {
        function t(t, i, n) {
          var o = {
            close: '.js-modal-close',
            open: '.js-modal-open-' + i,
            openClass: 'modal--is-active',
            closingClass: 'modal--is-closing',
            bodyOpenClass: 'modal-open',
            bodyOpenSolidClass: 'modal-open--solid',
            bodyClosingClass: 'modal-closing',
            closeOffContentClick: !0,
          };
          return (
            (this.id = t),
            (this.$modal = e('#' + t)),
            !!this.$modal.length &&
              ((this.nodes = {
                $parent: e('html').add('body'),
                $modalContent: this.$modal.find('.modal__inner'),
              }),
              (this.config = e.extend(o, n)),
              (this.modalIsOpen = !1),
              (this.$focusOnOpen = this.config.focusOnOpen
                ? e(this.config.focusOnOpen)
                : this.$modal),
              (this.isSolid = this.config.solid),
              void this.init())
          );
        }
        return (
          (t.prototype.init = function () {
            var t = e(this.config.open);
            t.attr('aria-expanded', 'false'),
              e(this.config.open).on('click', this.open.bind(this)),
              this.$modal
                .find(this.config.close)
                .on('click', this.close.bind(this)),
              e('body').on(
                'drawerOpen',
                function () {
                  this.close();
                }.bind(this)
              );
          }),
          (t.prototype.open = function (t) {
            var i = !1;
            this.modalIsOpen ||
              (t ? t.preventDefault() : (i = !0),
              t &&
                t.stopPropagation &&
                (t.stopPropagation(),
                (this.$activeSource = e(t.currentTarget).attr(
                  'aria-expanded',
                  'true'
                ))),
              this.modalIsOpen && !i && this.close(),
              this.$modal.prepareTransition().addClass(this.config.openClass),
              this.nodes.$parent.addClass(this.config.bodyOpenClass),
              this.isSolid &&
                this.nodes.$parent.addClass(this.config.bodyOpenSolidClass),
              (this.modalIsOpen = !0),
              theme.a11y.trapFocus({
                $container: this.$modal,
                $elementToFocus: this.$focusOnOpen,
                namespace: 'modal_focus',
              }),
              e('body')
                .trigger('productModalOpen')
                .trigger('modalOpen.' + this.id),
              this.bindEvents());
          }),
          (t.prototype.close = function () {
            this.modalIsOpen &&
              (e(document.activeElement).trigger('blur'),
              this.$modal
                .prepareTransition()
                .removeClass(this.config.openClass)
                .addClass(this.config.closingClass),
              this.nodes.$parent.removeClass(this.config.bodyOpenClass),
              this.nodes.$parent.addClass(this.config.bodyClosingClass),
              window.setTimeout(
                function () {
                  this.nodes.$parent.removeClass(this.config.bodyClosingClass),
                    this.$modal.removeClass(this.config.closingClass),
                    this.$activeSource &&
                      this.$activeSource.attr('aria-expanded') &&
                      this.$activeSource.attr('aria-expanded', 'false').focus();
                }.bind(this),
                500
              ),
              this.isSolid &&
                this.nodes.$parent.removeClass(this.config.bodyOpenSolidClass),
              (this.modalIsOpen = !1),
              theme.a11y.removeTrapFocus({
                $container: this.$modal,
                namespace: 'modal_focus',
              }),
              e('body').trigger('modalClose.' + this.id),
              this.unbindEvents());
          }),
          (t.prototype.bindEvents = function () {
            this.nodes.$parent.on(
              'keyup.modal',
              function (e) {
                27 === e.keyCode && this.close();
              }.bind(this)
            ),
              this.config.closeOffContentClick &&
                (this.$modal.on('click.modal', this.close.bind(this)),
                this.nodes.$modalContent.on('click.modal', function (e) {
                  e.stopImmediatePropagation();
                }));
          }),
          (t.prototype.unbindEvents = function () {
            this.nodes.$parent.off('.modal'),
              this.config.closeOffContentClick &&
                (this.$modal.off('.modal'),
                this.nodes.$modalContent.off('.modal'));
          }),
          t
        );
      })()),
      (theme.Drawers = (function () {
        function t(t, i) {
          return (
            (this.config = {
              id: t,
              close: '.js-drawer-close',
              open: '.js-drawer-open-' + i,
              openClass: 'js-drawer-open',
              closingClass: 'js-drawer-closing',
              activeDrawer: 'drawer--is-open',
              namespace: '.drawer-' + i,
            }),
            (this.$nodes = {
              parent: e(document.documentElement).add('body'),
              page: e('#MainContent'),
            }),
            (this.$drawer = e('#' + t)),
            !!this.$drawer.length && ((this.isOpen = !1), void this.init())
          );
        }
        return (
          (t.prototype = e.extend({}, t.prototype, {
            init: function () {
              var t = e(this.config.open);
              t.attr('aria-expanded', 'false'),
                t.on('click', this.open.bind(this)),
                this.$drawer
                  .find(this.config.close)
                  .on('click', this.close.bind(this)),
                e('body').on(
                  'productModalOpen',
                  function () {
                    this.close();
                  }.bind(this)
                );
            },
            open: function (t, i) {
              if ((t && t.preventDefault(), !this.isOpen)) {
                if (t && t.stopPropagation)
                  t.stopPropagation(),
                    (this.$activeSource = e(t.currentTarget).attr(
                      'aria-expanded',
                      'true'
                    ));
                else if (i) {
                  var n = e(i);
                  this.$activeSource = n.attr('aria-expanded', 'true');
                }
                this.$drawer
                  .prepareTransition()
                  .addClass(this.config.activeDrawer),
                  this.$nodes.parent.addClass(this.config.openClass),
                  (this.isOpen = !0),
                  theme.a11y.trapFocus({
                    $container: this.$drawer,
                    namespace: 'drawer_focus',
                  }),
                  e('body')
                    .trigger('drawerOpen')
                    .trigger('drawerOpen.' + this.config.id),
                  this.bindEvents();
              }
            },
            close: function () {
              this.isOpen &&
                (e(document.activeElement).trigger('blur'),
                this.$drawer
                  .prepareTransition()
                  .removeClass(this.config.activeDrawer),
                this.$nodes.parent.removeClass(this.config.openClass),
                this.$nodes.parent.addClass(this.config.closingClass),
                window.setTimeout(
                  function () {
                    this.$nodes.parent.removeClass(this.config.closingClass),
                      this.$activeSource &&
                        this.$activeSource.attr('aria-expanded') &&
                        this.$activeSource
                          .attr('aria-expanded', 'false')
                          .focus();
                  }.bind(this),
                  500
                ),
                (this.isOpen = !1),
                theme.a11y.removeTrapFocus({
                  $container: this.$drawer,
                  namespace: 'drawer_focus',
                }),
                this.unbindEvents());
            },
            bindEvents: function () {
              theme.a11y.lockMobileScrolling(
                this.config.namespace,
                this.$nodes.page
              ),
                this.$nodes.page.on(
                  'click' + this.config.namespace,
                  function () {
                    return this.close(), !1;
                  }.bind(this)
                ),
                this.$nodes.parent.on(
                  'keyup' + this.config.namespace,
                  function (e) {
                    27 === e.keyCode && this.close();
                  }.bind(this)
                );
            },
            unbindEvents: function () {
              theme.a11y.unlockMobileScrolling(
                this.config.namespace,
                this.$nodes.page
              ),
                this.$nodes.parent.off(this.config.namespace),
                this.$nodes.page.off(this.config.namespace);
            },
          })),
          t
        );
      })()),
      (theme.cart = {
        getCart: function () {
          return e.getJSON(theme.routes.cart);
        },
        changeItem: function (e, t) {
          return this._updateCart({
            type: 'POST',
            url: theme.routes.cartChange,
            data: 'quantity=' + t + '&id=' + e,
            dataType: 'json',
          });
        },
        addItemFromForm: function (e) {
          return this._updateCart({
            type: 'POST',
            url: theme.routes.cartAdd,
            data: e,
            dataType: 'json',
          });
        },
        _updateCart: function (t) {
          return e.ajax(t).then(
            function (e) {
              return e;
            }.bind(this)
          );
        },
        updateNote: function (t) {
          var i = {
            type: 'POST',
            url: '/cart/update.js',
            data: 'note=' + theme.cart.attributeToString(t),
            dataType: 'json',
            success: function (e) {},
            error: function (e, t) {},
          };
          e.ajax(i);
        },
        attributeToString: function (e) {
          return (
            'string' != typeof e && ((e += ''), 'undefined' === e && (e = '')),
            e.trim()
          );
        },
      }),
      e(function () {
        e('body').on('click', '.cart__checkout', function () {
          e(this).addClass('btn--loading');
        }),
          e('body').on('change', 'textarea[name="note"]', function () {
            var t = e(this).val();
            theme.cart.updateNote(t);
          }),
          e('body').on('click', '.cart__checkout--ajax', function (t) {
            if (!e('#CartAgree').is(':checked'))
              return (
                alert(theme.strings.cartTermsConfirmation),
                e(this).removeClass('btn--loading'),
                !1
              );
          }),
          e('body').on('click', '.cart__checkout--page', function (t) {
            if (!e('#CartPageAgree').is(':checked'))
              return (
                alert(theme.strings.cartTermsConfirmation),
                e(this).removeClass('btn--loading'),
                !1
              );
          });
      }),
      (theme.QtySelector = (function () {
        function t(t, n) {
          (this.$wrapper = t),
            (this.$input = t.find(i.input)),
            (this.$plus = t.find(i.plus)),
            (this.$minus = t.find(i.minus)),
            (this.minValue = this.$input.attr('min') || 1);
          var o = { namespace: null, key: this.$input.data('id') };
          (this.options = e.extend(o, n)), this.initEventListeners();
        }
        var i = {
          input: '.js-qty__num',
          plus: '.js-qty__adjust--plus',
          minus: '.js-qty__adjust--minus',
        };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            initEventListeners: function () {
              this.$plus.on(
                'click',
                function () {
                  var e = this.validateQty(this.$input.val());
                  this.addQty(e);
                }.bind(this)
              ),
                this.$minus.on(
                  'click',
                  function () {
                    var e = this.validateQty(this.$input.val());
                    this.subtractQty(e);
                  }.bind(this)
                ),
                this.$input.on(
                  'change',
                  function () {
                    var e = this.validateQty(this.$input.val());
                    this.changeQty(e);
                  }.bind(this)
                );
            },
            addQty: function (e) {
              var t = e + 1;
              this.changeQty(t);
            },
            subtractQty: function (e) {
              var t = e - 1;
              t <= this.minValue && (t = this.minValue), this.changeQty(t);
            },
            changeQty: function (t) {
              this.$input.val(t),
                e('body').trigger('qty' + this.options.namespace, [
                  this.options.key,
                  t,
                ]);
            },
            validateQty: function (e) {
              return (
                (parseFloat(e) != parseInt(e) || isNaN(e)) && (e = 1),
                parseInt(e)
              );
            },
          })),
          t
        );
      })()),
      (theme.CartDrawer = (function () {
        function t() {
          (this.status = { loaded: !1, loading: !1 }),
            (this.drawer = new theme.Drawers('CartDrawer', 'cart'));
          var t = e(n.template).html();
          (this.template = Handlebars.compile(t)),
            theme.cart.getCart().then(this.buildCart.bind(this)),
            this.initEventListeners();
        }
        var i = { namespace: '.ajaxcart' },
          n = {
            drawer: '#CartDrawer',
            container: '#CartContainer',
            template: '#CartTemplate',
            cartBubble: '.cart-link__bubble',
          };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            initEventListeners: function () {
              e('body').on(
                'updateCart' + i.namespace,
                this.initQtySelectors.bind(this)
              ),
                e('body').on(
                  'updateCart' + i.namespace,
                  this.updateCartNotification.bind(this)
                ),
                e('body').on(
                  'added.ajaxProduct',
                  function (e, t) {
                    theme.cart.getCart().then(
                      function (e) {
                        this.buildCart(e, !0, t);
                      }.bind(this)
                    );
                  }.bind(this)
                );
            },
            buildCart: function (t, o, a) {
              if ((this.loading(!0), this.emptyCart(), 0 === t.item_count))
                e(n.container).append(
                  '<div class="drawer__scrollable"><p class="appear-animation appear-delay-3">' +
                    theme.strings.cartEmpty +
                    '</p></div>'
                );
              else {
                var s = [],
                  r = {},
                  d = {},
                  c = 1;
                e.each(t.items, function (t, i) {
                  var n;
                  (n =
                    null !== i.image
                      ? i.image.replace(/(\.[^.]*)$/, '_180x$1')
                      : '//cdn.themobilecase.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif'),
                    null !== i.properties &&
                      e.each(i.properties, function (e, t) {
                        ('_' !== e.charAt(0) && t) || delete i.properties[e];
                      });
                  var o = 0;
                  if (0 !== i.line_level_discount_allocations.length)
                    for (var a in i.line_level_discount_allocations)
                      (o = i.line_level_discount_allocations[a].amount),
                        (i.line_level_discount_allocations[
                          a
                        ].formattedAmount = theme.Currency.formatMoney(
                          o,
                          theme.settings.moneyFormat
                        ));
                  (c += 2),
                    (r = {
                      key: i.key,
                      url: i.url,
                      img: n,
                      animationRow: c,
                      name: i.product_title,
                      variation: i.variant_title,
                      properties: i.properties,
                      itemQty: i.quantity,
                      price: theme.Currency.formatMoney(
                        i.price,
                        theme.settings.moneyFormat
                      ),
                      unitPrice: theme.Currency.formatMoney(
                        i.unit_price,
                        theme.settings.moneyFormat
                      ),
                      unitBase: theme.Currency.getBaseUnit(i),
                      discountedPrice: theme.Currency.formatMoney(
                        i.price - i.total_discount / i.quantity,
                        theme.settings.moneyFormat
                      ),
                      discounts: i.line_level_discount_allocations,
                      discountsApplied:
                        0 !== i.line_level_discount_allocations.length,
                      vendor: i.vendor,
                    }),
                    s.push(r);
                }),
                  (c += 2);
                var l = 0;
                if (0 !== t.cart_level_discount_applications.length)
                  for (var h in t.cart_level_discount_applications)
                    (l =
                      t.cart_level_discount_applications[h]
                        .total_allocated_amount),
                      (t.cart_level_discount_applications[
                        h
                      ].formattedAmount = theme.Currency.formatMoney(
                        l,
                        theme.settings.moneyFormat
                      ));
                (d = {
                  items: s,
                  note: t.note,
                  lastAnimationRow: c,
                  cartDiscounts: t.cart_level_discount_applications,
                  cartDiscountsApplied:
                    0 !== t.cart_level_discount_applications.length,
                  totalPrice: theme.Currency.formatMoney(
                    t.total_price,
                    theme.settings.moneyFormat
                  ),
                }),
                  e(n.container).append(this.template(d));
              }
              (this.status.loaded = !0),
                this.loading(!1),
                e('body').trigger('updateCart' + i.namespace, t),
                themobilecase &&
                  themobilecase.StorefrontExpressButtons &&
                  themobilecase.StorefrontExpressButtons.initialize(),
                o === !0 && this.drawer.open(!1, a);
            },
            initQtySelectors: function () {
              e(n.container)
                .find('.js-qty__wrapper')
                .each(
                  function (t, i) {
                    new theme.QtySelector(e(i), { namespace: '.cart-drawer' });
                  }.bind(this)
                ),
                e('body').on('qty.cart-drawer', this.updateItem.bind(this));
            },
            updateItem: function (e, t, i) {
              this.status.loading ||
                (this.loading(!0),
                theme.cart
                  .changeItem(t, i)
                  .then(
                    function (e) {
                      this.updateSuccess(e);
                    }.bind(this)
                  )
                  .catch(
                    function (e) {
                      this.updateError(e);
                    }.bind(this)
                  )
                  .always(
                    function () {
                      this.loading(!1);
                    }.bind(this)
                  ));
            },
            loading: function (t) {
              (this.status.loading = t),
                t
                  ? e(n.container).addClass('is-loading')
                  : e(n.container).removeClass('is-loading');
            },
            emptyCart: function () {
              e(n.container).empty();
            },
            updateSuccess: function (e) {
              this.buildCart(e);
            },
            updateError: function (e) {
              e.responseJSON && e.responseJSON.description;
            },
            updateCartNotification: function (t, i) {
              i.items.length > 0
                ? e(n.cartBubble).addClass('cart-link__bubble--visible')
                : e(n.cartBubble).removeClass('cart-link__bubble--visible');
            },
          })),
          t
        );
      })()),
      (theme.AjaxProduct = (function () {
        function t(e) {
          (this.$form = e),
            (this.$addToCart = this.$form.find('.add-to-cart')),
            this.$form.length &&
              this.$form.on('submit', this.addItemFromForm.bind(this));
        }
        var i = { loading: !1 };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            addItemFromForm: function (e, t) {
              if ((e.preventDefault(), !i.loading)) {
                this.$addToCart.addClass('btn--loading'), (i.loading = !0);
                var n = this.$form.serialize();
                theme.cart
                  .addItemFromForm(n)
                  .then(
                    function (e) {
                      this.success(e);
                    }.bind(this)
                  )
                  .catch(
                    function (e) {
                      this.error(e);
                    }.bind(this)
                  )
                  .always(
                    function () {
                      (i.loading = !1),
                        this.$addToCart.removeClass('btn--loading');
                    }.bind(this)
                  );
              }
            },
            success: function (t) {
              this.$form.find('.errors').remove(),
                e('body').trigger('added.ajaxProduct', this.$addToCart);
            },
            error: function (e) {
              this.$form.find('.errors').remove(),
                e.responseJSON &&
                  e.responseJSON.description &&
                  this.$form.prepend(
                    '<div class="errors text-center">' +
                      e.responseJSON.description +
                      '</div>'
                  );
            },
          })),
          t
        );
      })()),
      (theme.collapsibles = (function () {
        function t() {
          e(n.trigger).each(function () {
            var t = e(this),
              i = t.hasClass(o.open);
            t.attr('aria-expanded', i);
          }),
            e('body, .modal__inner')
              .off(a)
              .on('click' + a, n.trigger, function () {
                if (!s) {
                  s = !0;
                  var t = e(this),
                    a = t.hasClass(o.open),
                    r = t.attr('aria-controls'),
                    d = e('#' + r),
                    c = d.find(n.moduleInner).outerHeight(),
                    l = t.hasClass(o.autoHeight);
                  a &&
                    l &&
                    setTimeout(function () {
                      (c = 0), i(d, c, a, l);
                    }, 0),
                    a && !l && (c = 0),
                    t.attr('aria-expanded', !a).toggleClass(o.open, !a),
                    i(d, c, a, l);
                }
              });
        }
        function i(e, t, i, n) {
          if (
            (e
              .removeClass(o.hide)
              .prepareTransition()
              .css('height', t)
              .toggleClass(o.open, !i),
            !i && n)
          ) {
            var a = e;
            window.setTimeout(function () {
              a.css('height', 'auto'), (s = !1);
            }, 500);
          } else s = !1;
        }
        var n = {
            trigger: '.collapsible-trigger',
            module: '.collapsible-content',
            moduleInner: '.collapsible-content__inner',
          },
          o = {
            hide: 'hide',
            open: 'is-open',
            autoHeight: 'collapsible--auto-height',
          },
          a = '.collapsible',
          s = !1;
        return { init: t };
      })()),
      (theme.headerNav = (function () {
        function t() {
          (u = e(window)),
            (p = e(w.navContainerWithLogo)),
            (m = e(w.logoContainer)),
            (f = e(w.navigation)),
            (g = e(w.wrapper)),
            (v = e(w.siteHeader)),
            (_.stickyEnabled = v.data('sticky')),
            _.stickyEnabled &&
              ((_.wrapperOverlayed = g.hasClass(_.overlayedClass)), d()),
            (theme.settings.overlayHeader = v.data('overlay')),
            theme.settings.overlayHeader &&
              themobilecase &&
              themobilecase.designMode &&
              e('body').hasClass('template-collection') &&
              !e('.collection-hero').length &&
              this.disableOverlayHeader(),
            r(),
            n(),
            u.on('load' + _.namespace, s),
            u.on('resize' + _.namespace, e.debounce(150, s));
        }
        function i() {
          e(window).off(_.namespace),
            e(w.searchBtn).off(_.namespace),
            e(w.closeSearch).off(_.namespace),
            y.off(_.namespace),
            e(w.navLinks).off(_.namespace),
            e(w.navDropdownLinks).off(_.namespace);
        }
        function n() {
          e(w.searchBtn).on('click' + _.namespace, function (e) {
            e.preventDefault(), o();
          }),
            e(w.closeSearch).on('click' + _.namespace, function () {
              a();
            });
        }
        function o() {
          e(w.searchContainer).addClass('is-active'),
            y.addClass('js-drawer-open js-drawer-open--search'),
            theme.a11y.trapFocus({
              $container: e(w.searchContainer),
              namespace: 'header_search',
              $elementToFocus: e(w.searchContainer).find('input'),
            }),
            theme.config.bpSmall &&
              _.stickyEnabled &&
              _.lastScroll < 300 &&
              window.scrollTo(0, 0),
            theme.a11y.lockMobileScrolling(_.namespace),
            b.on('click' + _.namespace, function () {
              return a(), !1;
            }),
            y.on('keyup' + _.namespace, function (e) {
              27 === e.keyCode && a();
            });
        }
        function a() {
          e(document.activeElement).trigger('blur'),
            y
              .removeClass('js-drawer-open js-drawer-open--search')
              .off(_.namespace),
            e(w.searchContainer).removeClass('is-active'),
            theme.a11y.removeTrapFocus({
              $container: e(w.searchContainer),
              namespace: 'header_search',
            }),
            theme.a11y.unlockMobileScrolling(_.namespace),
            b.off('click' + _.namespace),
            y.off('keyup' + _.namespace);
        }
        function s() {
          e(w.logo).each(function () {
            var t = e(this),
              i = t.width(),
              n = t.closest('.grid__item').width();
            i > n ? t.css('maxWidth', n) : t.removeAttr('style');
          });
        }
        function r() {
          function t(t) {
            var i = t.parent();
            if (
              (i.hasClass(S.hasDropdownClass) &&
                (i.addClass(S.dropdownActive), (s = !0)),
              !theme.config.isTouch && !d)
            ) {
              var o = theme.config.isTouch ? 'touchend' : 'click';
              (d = !0),
                e('body').on(o + _.namespace, function () {
                  n(), e('body').off(_.namespace), (d = !1);
                });
            }
          }
          function i(e, t) {
            var i = e.parent();
            (i.hasClass(S.hasSubDropdownClass) || t) &&
              (i.addClass(S.dropdownActive), (r = !0));
          }
          function n() {
            o(), a();
          }
          function o() {
            e(w.navItems).removeClass(S.dropdownActive);
          }
          function a() {
            e(w.navDropdownLinks).parent().removeClass(S.dropdownActive);
          }
          var s = !1,
            r = !1,
            d = !1;
          theme.config.isTouch &&
            (e(w.navLinksWithDropdown).on(
              'touchend' + _.namespace,
              function (i) {
                var o = e(this),
                  a = o.parent();
                a.hasClass(S.dropdownActive)
                  ? window.location.replace(o.attr('href'))
                  : (i.preventDefault(), n(), t(o));
              }
            ),
            e(w.navDropdownLinks).on('touchend' + _.namespace, function (t) {
              var n = e(this),
                o = n.parent();
              o.hasClass(S.hasSubDropdownClass)
                ? o.hasClass(S.dropdownActive)
                  ? window.location.replace(n.attr('href'))
                  : (t.preventDefault(), a(), i(n))
                : window.location.replace(n.attr('href'));
            })),
            e(w.navLinks).on('focusin mouseover' + _.namespace, function () {
              s && o(), r && a(), t(e(this));
            }),
            e(w.navLinks).on('mouseleave' + _.namespace, function () {
              n();
            }),
            e(w.navDropdownLinks).on('focusin' + _.namespace, function () {
              a(), i(e(this), !0);
            });
        }
        function d() {
          (_.lastScroll = 0),
            v.wrap('<div class="site-header-sticky"></div>'),
            c(),
            u.on('resize' + _.namespace, e.debounce(50, c)),
            u.on('scroll' + _.namespace, e.throttle(15, l)),
            themobilecase &&
              themobilecase.designMode &&
              setTimeout(function () {
                c();
              }, 250);
        }
        function c() {
          e('.site-header-sticky').css('height', v.outerHeight(!0));
        }
        function l() {
          var e = u.scrollTop(),
            t = 250;
          if (e > t) {
            if (_.stickyActive) return;
            (_.stickyActive = !0),
              v.addClass(_.stickyClass),
              _.wrapperOverlayed && g.removeClass(_.overlayedClass),
              setTimeout(function () {
                v.addClass(_.openTransitionClass);
              }, 100);
          } else {
            if (!_.stickyActive) return;
            (_.stickyActive = !1),
              v.removeClass(_.openTransitionClass).removeClass(_.stickyClass),
              _.wrapperOverlayed && g.addClass(_.overlayedClass);
          }
          _.lastScroll = e;
        }
        function h() {
          e(w.wrapper)
            .removeClass(_.overlayEnabledClass)
            .removeClass(_.overlayedClass),
            (_.wrapperOverlayed = !1);
        }
        var u,
          p,
          m,
          f,
          g,
          v,
          y = e(document.documentElement).add('body'),
          b = e('#MainContent'),
          w = {
            wrapper: '.header-wrapper',
            siteHeader: '.site-header',
            searchBtn: '.js-search-header',
            closeSearch: '.js-search-header-close',
            searchContainer: '.site-header__search-container',
            logoContainer: '.site-header__logo',
            logo: '.site-header__logo img',
            navigation: '.site-navigation',
            navContainerWithLogo: '.header-item--logo',
            navItems: '.site-nav__item',
            navLinks: '.site-nav__link',
            navLinksWithDropdown: '.site-nav__link--has-dropdown',
            navDropdownLinks: '.site-nav__dropdown-link--second-level',
          },
          S = {
            hasDropdownClass: 'site-nav--has-dropdown',
            hasSubDropdownClass: 'site-nav__deep-dropdown-trigger',
            dropdownActive: 'is-focused',
          },
          _ = {
            namespace: '.siteNav',
            wrapperOverlayed: !1,
            overlayedClass: 'is-light',
            overlayEnabledClass: 'header-wrapper--overlay',
            stickyEnabled: !1,
            stickyActive: !1,
            stickyClass: 'site-header--stuck',
            openTransitionClass: 'site-header--opening',
            lastScroll: 0,
          };
        return { init: t, disableOverlayHeader: h, unload: i };
      })()),
      (theme.articleImages = (function () {
        function t() {
          (n.$rteImages = e('.rte--indented-images')),
            n.$rteImages.length && e(window).on('load', i);
        }
        function i() {
          n.$rteImages.find('img').each(function () {
            var t = e(this),
              i = t.attr('style');
            (i && 'float: none;' != i) ||
              (t.width() < n.$rteImages.width() &&
                t.addClass('rte__no-indent'));
          });
        }
        var n = {};
        return { init: t };
      })()),
      (theme.Slideshow = (function () {
        function t(t, n) {
          (this.$slideshow = e(t)),
            (this.$wrapper = this.$slideshow.closest('.' + i.wrapper)),
            (this.$pause = this.$wrapper.find('.' + i.pauseButton)),
            (this.settings = {
              accessibility: !0,
              arrows: !!n.arrows,
              dots: !!n.dots,
              fade: !!n.fade,
              speed: n.speed ? n.speed : 500,
              draggable: !0,
              touchThreshold: 5,
              pauseOnHover: !1,
              autoplay: this.$slideshow.data('autoplay'),
              autoplaySpeed: this.$slideshow.data('speed'),
            }),
            this.$slideshow.on('init', this.init.bind(this)),
            this.settings.fade &&
              (this.$slideshow.on(
                'beforeChange',
                this.beforeSlideChange.bind(this)
              ),
              this.$slideshow.on(
                'afterChange',
                this.afterSlideChange.bind(this)
              )),
            this.$slideshow.slick(this.settings),
            this.$pause.on('click', this._togglePause.bind(this));
        }
        this.$slideshow = null;
        var i = {
          next: 'is-next',
          init: 'is-init',
          animateOut: 'animate-out',
          wrapper: 'slideshow-wrapper',
          slideshow: 'slideshow',
          allSlides: 'slick-slide',
          currentSlide: 'slick-current',
          pauseButton: 'slideshow__pause',
          isPaused: 'is-paused',
        };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            init: function (e, t) {
              (this.$slideshowList = t.$list),
                (this.$slickDots = t.$dots),
                (this.$allSlides = t.$slides),
                (this.slideCount = t.slideCount),
                this.$slideshow.addClass(i.init),
                this._a11y(),
                this._clonedLazyloading();
            },
            beforeSlideChange: function (e, t, n, o) {
              var a = t.$slider;
              a.find('.' + i.currentSlide).addClass(i.animateOut);
            },
            afterSlideChange: function (e, t, n) {
              var o = t.$slider;
              o.find('.' + i.allSlides).removeClass(i.animateOut);
            },
            destroy: function () {
              this.$slideshow.slick('unslick');
            },
            _play: function () {
              this.$slideshow.slick('slickPause'),
                e(i.pauseButton).addClass('is-paused');
            },
            _pause: function () {
              this.$slideshow.slick('slickPlay'),
                e(i.pauseButton).removeClass('is-paused');
            },
            _togglePause: function () {
              var t = this._getSlideshowId(this.$pause);
              this.$pause.hasClass(i.isPaused)
                ? (this.$pause.removeClass(i.isPaused), e(t).slick('slickPlay'))
                : (this.$pause.addClass(i.isPaused), e(t).slick('slickPause'));
            },
            _getSlideshowId: function (e) {
              return '#Slideshow-' + e.data('id');
            },
            _activeSlide: function () {
              return this.$slideshow.find('.slick-active');
            },
            _currentSlide: function () {
              return this.$slideshow.find('.slick-current');
            },
            _nextSlide: function (e) {
              return this.$slideshow.find(
                '.slideshow__slide[data-slick-index="' + e + '"]'
              );
            },
            _a11y: function () {
              var t = this.$slideshowList,
                n = this.settings.autoplay;
              t &&
                (t.removeAttr('aria-live'),
                e(i.wrapper).on(
                  'focusin',
                  function (o) {
                    e(i.wrapper).has(o.target).length &&
                      (t.attr('aria-live', 'polite'), n && this._pause());
                  }.bind(this)
                ),
                e(i.wrapper).on(
                  'focusout',
                  function (o) {
                    e(i.wrapper).has(o.target).length &&
                      (t.removeAttr('aria-live'), n && this._play());
                  }.bind(this)
                ));
            },
            _clonedLazyloading: function () {
              var t = this.$slideshow;
              t.find('.slick-slide').each(
                function (i, n) {
                  var o = e(n);
                  if (o.hasClass('slick-cloned')) {
                    var a = o.data('id'),
                      s = o
                        .find('.hero__image')
                        .removeClass('lazyloading')
                        .addClass('lazyloaded');
                    setTimeout(function () {
                      var e = t
                        .find(
                          '.slideshow__slide--' +
                            a +
                            ':not(.slick-cloned) .hero__image'
                        )
                        .attr('style');
                      e && s.attr('style', e);
                    }, this.settings.autoplaySpeed / 1.5);
                  }
                }.bind(this)
              );
            },
          })),
          t
        );
      })()),
      (theme.announcementBar = (function () {
        function t() {
          e(r.closeBtn).length &&
            (theme.config.hasSessionStorage &&
              'hidden' !== sessionStorage[s()] &&
              window.setTimeout(function () {
                n();
              }, 2e3),
            theme.config.hasSessionStorage ||
              window.setTimeout(function () {
                n();
              }, 2e3),
            e(r.closeBtn).on('click', function (e) {
              e.preventDefault(), a();
            }),
            e(window).on('resize' + c.namespace, e.debounce(150, o)));
        }
        function i() {
          e(window).off(c.namespace);
        }
        function n() {
          e(r.bar).removeClass(d.closed), o();
        }
        function o() {
          var t = e(r.text).outerHeight(!0);
          e(r.bar).addClass(d.opening).css({ 'max-height': t });
        }
        function a() {
          theme.config.hasSessionStorage &&
            sessionStorage.setItem(s(), 'hidden'),
            e(r.bar).addClass(d.closed);
        }
        function s() {
          return e(r.text).data('text');
        }
        var r = {
            bar: '.announcement',
            text: '.announcement__text',
            closeBtn: '.announcement__close',
          },
          d = {
            opening: 'announcement--opening',
            closed: 'announcement--closed',
          },
          c = { namespace: '.announcementBar' };
        return { init: t, unload: i };
      })()),
      (theme.predictiveSearch = (function () {
        function t() {
          if (theme.settings.predictiveSearch) {
            if (document.getElementById('themobilecase-features')) {
              var t = JSON.parse(
                document.getElementById('themobilecase-features').innerHTML
              );
              if (!t.predictiveSearch) return;
            }
            e(v.form).attr('autocomplete', 'off'),
              e(v.form).on('submit' + g, o),
              e(v.input, v.form).on('keyup' + g, a),
              e(v.searchButton, v.wrapper).on('click' + g, n);
            var i = e(v.resultTemplate).html();
            resultTemplate = Handlebars.compile(i);
          }
        }
        function i() {
          e(v.wrapper).addClass('hide'), clearTimeout(p);
        }
        function n() {
          e(v.form).trigger('submit');
        }
        function o(t) {
          var i = e(this);
          t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
          var n = i.serializeArray().reduce(function (e, t) {
            return (e[t.name] = t.value), e;
          }, {});
          n.q && (n.q += '*');
          var o = e.param(n);
          return (window.location.href = '/search?' + o), !1;
        }
        function a(e) {
          return e.keyCode === y.up_arrow
            ? void u(e, 'up')
            : e.keyCode === y.down_arrow
            ? void u(e, 'down')
            : void (e.keyCode !== y.tab && s());
        }
        function s() {
          var t = e(v.input, v.form).val();
          if ('' === t) return void i();
          var n = h(t);
          clearTimeout(p),
            (p = setTimeout(
              function () {
                r(n);
              }.bind(this),
              500
            ));
        }
        function r(t) {
          f ||
            (m !== t &&
              ((m = t),
              (f = !0),
              jQuery
                .getJSON('/search/suggest.json', {
                  q: t,
                  resources: {
                    type: theme.settings.predictiveSearchType,
                    limit: 3,
                    options: {
                      unavailable_products: 'last',
                      fields: 'title,product_type,variants.title,vendor',
                    },
                  },
                })
                .done(function (n) {
                  f = !1;
                  var o = {},
                    a = 0;
                  e(v.wrapper).removeClass('hide');
                  for (
                    var s = Object.entries(n.resources.results),
                      r = s.length - 1;
                    r >= 0;
                    r--
                  ) {
                    var h = s[r],
                      u = h[0],
                      p = h[1];
                    switch (((a += p.length), u)) {
                      case 'products':
                        o[u] = d(p);
                        break;
                      case 'collections':
                        o[u] = c(p);
                        break;
                      default:
                        o[u] = l(p);
                    }
                  }
                  0 === a && i(),
                    e(v.resultDiv).empty().append(resultTemplate(o)),
                    e(v.searchTerm, v.wrapper).text(t);
                })));
        }
        function d(e) {
          for (var t = [], i = e.length - 1; i >= 0; i--) {
            var n = e[i],
              o = {
                title: n.title,
                url: n.url,
                image: theme.Images.getSizedImageUrl(
                  n.image,
                  '200x200_crop_center'
                ),
                vendor: n.vendor,
                price: theme.Currency.formatMoney(n.price),
                compare_price_max: theme.Currency.formatMoney(
                  n.compare_at_price_max
                ),
                on_sale: parseInt(n.compare_at_price_max) > parseInt(n.price),
              };
            t.push(o);
          }
          return t;
        }
        function c(e) {
          for (var t = [], i = e.length - 1; i >= 0; i--) {
            var n = e[i],
              o = { title: n.title, url: n.url };
            n.featured_image.url &&
              (o.image = theme.Images.getSizedImageUrl(
                n.featured_image.url,
                '200x200_crop_center'
              )),
              t.push(o);
          }
          return t;
        }
        function l(e) {
          for (var t = e.length - 1; t >= 0; t--)
            if (e[t].image) {
              var i = theme.Images.getSizedImageUrl(
                e[t].image,
                '200x200_crop_center'
              );
              e[t].image = i;
            }
          return e;
        }
        function h(e) {
          return 'string' != typeof e
            ? null
            : e.trim().replace(/\ /g, '-').toLowerCase();
        }
        function u(e, t) {}
        var p,
          m = '',
          f = !1,
          g = '.predictive',
          v = {
            form: '#HeaderSearchForm',
            input: 'input[type="search"]',
            wrapper: '.predictive-results',
            searchButton: '[data-predictive-search-button]',
            searchTerm: '[data-predictive-search-term]',
            resultDiv: '#PredictiveResults',
            resultTemplate: '#PredictiveTemplate',
          },
          y = { up_arrow: 38, down_arrow: 40, tab: 9 };
        return { init: t };
      })()),
      (theme.initQuickShop = function (t) {
        var i = [],
          n = e('.quick-product__btn');
        n.each(function () {
          var t = e(this).data('product-id'),
            n = 'QuickShopModal-' + t,
            o = 'quick-modal-' + t;
          return i.indexOf(t) > -1
            ? void e('.modal--quick-shop[data-product-id="' + t + '"]').each(
                function (t) {
                  t > 0 && e(this).remove();
                }
              )
            : (new theme.Modals(n, o), void i.push(t));
        });
      }),
      (theme.videoModal = function () {
        function t(t) {
          s(),
            t.preventDefault(),
            theme.LibraryLoader.load('youtubeSdk'),
            theme.config.youTubeReady
              ? n(t)
              : e('body').on('youTubeReady', function () {
                  n(t);
                });
        }
        function i(t) {
          s();
          var i = e(t.currentTarget),
            n = i.next(h.mp4Player);
          n.clone().removeClass('hide').appendTo(h.videoHolder),
            u.open(t),
            e(h.videoHolder).find('video')[0].play(),
            (l = 'mp4');
        }
        function n(t) {
          var i = e(t.currentTarget),
            n = a(i.attr('href')),
            o = e.extend({}, d, { videoId: n });
          (o.playerVars.playsinline = theme.config.bpSmall ? 0 : 1),
            (r = new YT.Player(c, o)),
            u.open(t),
            (l = 'youtube');
        }
        function o(e) {
          e.target.playVideo();
        }
        function a(e) {
          var t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
            i = e.match(t);
          return !(!i || 11 != i[7].length) && i[7];
        }
        function s() {
          e(h.videoHolder).empty();
        }
        var r = null,
          d = {
            width: 1280,
            height: 720,
            playerVars: {
              autohide: 0,
              autoplay: 1,
              branding: 0,
              cc_load_policy: 0,
              fs: 0,
              iv_load_policy: 3,
              modestbranding: 1,
              playsinline: 1,
              quality: 'hd720',
              rel: 0,
              showinfo: 0,
              wmode: 'opaque',
            },
            events: { onReady: o },
          },
          c = 'VideoHolder',
          l = !1,
          h = {
            videoHolder: '#' + c,
            youtube: 'a[href*="youtube.com/watch"], a[href*="youtu.be/"]',
            mp4Trigger: '.product-video-trigger--mp4',
            mp4Player: '.product-video-mp4-sound',
          };
        if (e(h.youtube).length || e(h.mp4Trigger).length) {
          var u = new theme.Modals('VideoModal', 'video-modal', {
            closeOffContentClick: !0,
            solid: !0,
          });
          e(h.youtube).on('click', t),
            e(h.mp4Trigger).on('click', i),
            e('body').on('modalClose.VideoModal', function () {
              r && 'youtube' === l
                ? setTimeout(function () {
                    r.destroy();
                  }, 500)
                : s();
            });
        }
      }),
      (theme.parallaxSections = {}),
      (theme.Parallax = (function () {
        function t(t, i) {
          (this.$container = e(t)),
            (this.namespace = i.namespace),
            this.$container.length &&
              (i.desktopOnly
                ? this.desktopInit()
                : this.init(this.$container, i));
        }
        var i = 7;
        return (
          (t.prototype = e.extend({}, t.prototype, {
            init: function (t) {
              var n = (this.$window = e(window)),
                o = this.$container.offset().top;
              n.on(
                'scroll' + this.namespace,
                function (e) {
                  var t = n.scrollTop(),
                    a = (o - t) / i;
                  this.$container.css({
                    transform: 'translate3d(0, ' + a + 'px, 0)',
                  });
                }.bind(this)
              ),
                n.on(
                  'resize' + this.namespace,
                  e.debounce(
                    350,
                    function () {
                      return (
                        n.off(this.namespace),
                        t && !theme.config.bpSmall
                          ? void this.init(!0)
                          : void this.init()
                      );
                    }.bind(this)
                  )
                );
            },
            desktopInit: function () {
              theme.config.bpSmall || this.init(!0),
                e('body').on(
                  'matchSmall',
                  function () {
                    this.destroy();
                  }.bind(this)
                ),
                e('body').on(
                  'matchLarge',
                  function () {
                    this.init(!0);
                  }.bind(this)
                );
            },
            destroy: function () {
              this.$container.removeAttr('style'),
                this.$window.off(this.namespace);
            },
          })),
          t
        );
      })()),
      (theme.Disclosure = (function () {
        function t(e) {
          (this.$container = e),
            (this.cache = {}),
            this._cacheSelectors(),
            this._connectOptions(),
            this._connectToggle(),
            this._onFocusOut();
        }
        var i = {
            disclosureList: '[data-disclosure-list]',
            disclosureToggle: '[data-disclosure-toggle]',
            disclosureInput: '[data-disclosure-input]',
            disclosureOptions: '[data-disclosure-option]',
          },
          n = { listVisible: 'disclosure-list--visible' };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            _cacheSelectors: function () {
              this.cache = {
                $disclosureList: this.$container.find(i.disclosureList),
                $disclosureToggle: this.$container.find(i.disclosureToggle),
                $disclosureInput: this.$container.find(i.disclosureInput),
                $disclosureOptions: this.$container.find(i.disclosureOptions),
              };
            },
            _connectToggle: function () {
              this.cache.$disclosureToggle.on(
                'click',
                function (t) {
                  var i = 'true' === e(t.currentTarget).attr('aria-expanded');
                  e(t.currentTarget).attr('aria-expanded', !i),
                    this.cache.$disclosureList.toggleClass(n.listVisible);
                }.bind(this)
              );
            },
            _connectOptions: function () {
              this.cache.$disclosureOptions.on(
                'click',
                function (t) {
                  t.preventDefault(),
                    this._submitForm(e(t.currentTarget).data('value'));
                }.bind(this)
              );
            },
            _onFocusOut: function () {
              this.cache.$disclosureToggle.on(
                'focusout',
                function (e) {
                  var t = 0 === this.$container.has(e.relatedTarget).length;
                  t && this._hideList();
                }.bind(this)
              ),
                this.cache.$disclosureList.on(
                  'focusout',
                  function (t) {
                    var i = e(t.currentTarget).has(t.relatedTarget).length > 0,
                      o = this.cache.$disclosureList.hasClass(n.listVisible);
                    o && !i && this._hideList();
                  }.bind(this)
                ),
                this.$container.on(
                  'keyup',
                  function (e) {
                    27 === e.which &&
                      (this._hideList(), this.cache.$disclosureToggle.focus());
                  }.bind(this)
                ),
                e('body').on(
                  'click',
                  function (e) {
                    var t = this.$container.has(e.target).length > 0,
                      i = this.cache.$disclosureList.hasClass(n.listVisible);
                    i && !t && this._hideList();
                  }.bind(this)
                );
            },
            _submitForm: function (t) {
              e('body').addClass('unloading'),
                this.cache.$disclosureInput.val(t),
                this.$container.parents('form').submit();
            },
            _hideList: function () {
              this.cache.$disclosureList.removeClass(n.listVisible),
                this.cache.$disclosureToggle.attr('aria-expanded', !1);
            },
            unload: function () {
              this.cache.$disclosureOptions.off(),
                this.cache.$disclosureToggle.off(),
                this.cache.$disclosureList.off(),
                this.$container.off();
            },
          })),
          t
        );
      })()),
      (theme.ProductMedia = (function () {
        function t(t, o) {
          (s[o] = { loaded: !1 }),
            t.each(function (t) {
              var i = e(this),
                n = i.data('media-id'),
                a = e(i.find('model-viewer')[0]),
                s = a.data('model-id');
              if (0 === t) {
                var l = i.closest(c.mediaGroup).find(c.xrButton);
                d[o] = { $element: l, defaultId: s };
              }
              r[n] = { modelId: s, sectionId: o, $container: i, $element: a };
            }),
            window.themobilecase.loadFeatures([
              { name: 'themobilecase-xr', version: '1.0', onLoad: i },
              { name: 'model-viewer-ui', version: '1.0', onLoad: n },
            ]),
            theme.LibraryLoader.load('modelViewerUiStyles');
        }
        function i(t) {
          if (!t) {
            if (!window.themobilecaseXR)
              return void document.addEventListener(
                'themobilecase_xr_initialized',
                function () {
                  i();
                }
              );
            for (var n in s)
              if (s.hasOwnProperty(n)) {
                var o = s[n];
                if (o.loaded) continue;
                var a = e('#ModelJson-' + n);
                window.themobilecaseXR.addModels(JSON.parse(a.html())),
                  (o.loaded = !0);
              }
            window.themobilecaseXR.setupXRElements();
          }
        }
        function n(e) {
          if (!e)
            for (var t in r)
              if (r.hasOwnProperty(t)) {
                var i = r[t];
                !i.modelViewerUi &&
                  themobilecase &&
                  (i.modelViewerUi = new themobilecase.ModelViewerUI(
                    i.$element
                  )),
                  o(i);
              }
        }
        function o(e) {
          var t = d[e.sectionId];
          e.$container.on('mediaVisible', function () {
            t.$element.attr('data-themobilecase-model3d-id', e.modelId),
              theme.config.isTouch || e.modelViewerUi.play();
          }),
            e.$container
              .on('mediaHidden', function () {
                t.$element.attr('data-themobilecase-model3d-id', t.defaultId),
                  e.modelViewerUi.pause();
              })
              .on('xrLaunch', function () {
                e.modelViewerUi.pause();
              });
        }
        function a(e) {
          for (var t in r)
            if (r.hasOwnProperty(t)) {
              var i = r[t];
              i.sectionId === e && delete r[t];
            }
          delete s[e];
        }
        var s = {},
          r = {},
          d = {},
          c = {
            mediaGroup: '[data-product-single-media-group]',
            xrButton: '[data-themobilecase-xr]',
          };
        return { init: t, removeSectionModels: a };
      })()),
      (theme.customerTemplates = (function () {
        function t() {
          e('#RecoverPassword').on('click', function (e) {
            e.preventDefault(), i();
          }),
            e('#HideRecoverPasswordLink').on('click', function (e) {
              e.preventDefault(), i();
            });
        }
        function i() {
          e('#RecoverPasswordForm').toggleClass('hide'),
            e('#CustomerLoginForm').toggleClass('hide');
        }
        function n() {
          var t = e('.reset-password-success');
          t.length && e('#ResetSuccess').removeClass('hide');
        }
        function o() {
          var t = e('#AddressNewForm'),
            i = e('.js-address-form');
          t.length &&
            i.length &&
            (themobilecase &&
              e('.js-address-country').each(function () {
                var t = e(this),
                  i = t.data('country-id'),
                  n = t.data('province-id'),
                  o = t.data('province-container-id');
                themobilecase &&
                  new themobilecase.CountryProvinceSelector(i, n, {
                    hideElement: o,
                  });
              }),
            e('.address-new-toggle').on('click', function () {
              t.toggleClass('hide');
            }),
            e('.address-edit-toggle').on('click', function () {
              var t = e(this).data('form-id');
              e('#EditAddress_' + t).toggleClass('hide');
            }),
            e('.address-delete').on('click', function () {
              var t = e(this),
                i = t.data('form-id'),
                n = t.data('confirm-message');
              confirm(n || 'Are you sure you wish to delete this address?') &&
                themobilecase &&
                themobilecase.postLink('/account/addresses/' + i, {
                  parameters: { _method: 'delete' },
                });
            }));
        }
        function a() {
          var e = window.location.hash;
          '#recover' === e && i();
        }
        return {
          init: function () {
            a(), t(), n(), o();
          },
        };
      })()),
      (theme.Product = (function () {
        function t(t, n) {
          var o = e('#' + n),
            a = o.attr('id');
          f[a] = t.target;
          f[a];
          r(o),
            'muted' === m[a].style ? f[a].mute() : d(o),
            (o.closest(p.startingSlide).length ||
              1 === o.data('image-count')) &&
              'muted' === m[a].style &&
              (f[a].playVideo(), i(a));
        }
        function i(t) {
          n(t), e(window).on('scroll.' + t, { id: t }, e.throttle(150, n));
        }
        function n(t) {
          var i;
          if ('string' == typeof t) i = t;
          else {
            if (!t.data) return;
            i = t.data.id;
          }
          if (theme.isElementVisible(e('#' + i))) {
            if (m[i] && 'unmuted' === m[i].style) return;
            o(i);
          } else a(i);
        }
        function o(e) {
          f[e] && 'function' == typeof f[e].playVideo && f[e].playVideo();
        }
        function a(e) {
          f[e] && 'function' == typeof f[e].pauseVideo && f[e].pauseVideo();
        }
        function s(t, i) {
          var n = e('#' + i),
            o = n.attr('id'),
            a = f[o];
          switch (t.data) {
            case -1:
              m[o].attemptedToPlay && (d(n), c(n));
              break;
            case 0:
              m[o] && m[o].loop && a.playVideo();
              break;
            case 1:
              d(n);
              break;
            case 3:
              m[o].attemptedToPlay = !0;
          }
        }
        function r(e) {
          e.closest(p.videoParent).addClass(u.loading);
        }
        function d(e) {
          e.closest(p.videoParent).removeClass(u.loading).addClass(u.loaded);
        }
        function c(e) {
          e.closest(p.videoParent).addClass(u.interactable);
        }
        function l(t) {
          var i = (this.$container = e(t)),
            n = (this.sectionId = i.attr('data-section-id'));
          (this.inModal = i.closest('.modal').length),
            this.$modal,
            (this.settings = {
              enableHistoryState: i.data('enable-history-state') || !1,
              namespace: '.product-' + n,
              inventory: i.data('inventory') || !1,
              incomingInventory: i.data('incoming-inventory') || !1,
              modalInit: !1,
              slickMainInitialized: !1,
              slickThumbInitialized: !1,
              thumbArrows: !1,
              thumbVertical: !1,
              hasImages: !0,
              hasMultipleImages: !1,
              imageSize: '620x',
              currentSlideIndex: 0,
              videoLooping: i.data('video-looping'),
            }),
            this.inModal &&
              ((this.settings.enableHistoryState = !1),
              (this.settings.namespace = '.product-' + n + '-modal'),
              (this.$modal = e('#QuickShopModal-' + n))),
            (this.selectors = {
              variantsJson: 'VariantsJson-' + n,
              currentVariantJson: 'CurrentVariantJson-' + n,
              media: '[data-product-media-type-model]',
              closeMedia: '.product-single__close-media',
              photoThumbs: '.product__thumb-' + n,
              thumbSlider: '#ProductThumbs-' + n,
              mainSlider: '#ProductPhotos-' + n,
              imageContainer: '[data-product-images]',
              productImageMain: '.product-image-main--' + n,
              dotsContainer: '.product__photo-dots--' + n,
              priceWrapper: '.product__price-wrap-' + n,
              price: '#ProductPrice-' + n,
              comparePrice: '#ComparePrice-' + n,
              priceA11y: '#PriceA11y-' + n,
              comparePriceA11y: '#ComparePriceA11y-' + n,
              unitWrapper: '.product__unit-price-wrapper--' + n,
              unitPrice: '.product__unit-price--' + n,
              unitPriceBaseUnit: '.product__unit-base--' + n,
              sku: '#Sku-' + n,
              inventory: '#ProductInventory-' + n,
              incomingInventory: '#ProductIncomingInventory-' + n,
              addToCart: '#AddToCart-' + n,
              addToCartText: '#AddToCartText-' + n,
              originalSelectorId: '#ProductSelect-' + n,
              singleOptionSelector: '.variant__input-' + n,
              variantColorSwatch: '.variant__input--color-swatch-' + n,
              modalFormHolder: '#ProductFormHolder-' + n,
              formContainer: '#AddToCartForm-' + n,
            }),
            (this.$mainSlider = e(this.selectors.mainSlider)),
            (this.$thumbSlider = e(this.selectors.thumbSlider)),
            (this.$firstProductImage = this.$mainSlider.find('img').first()),
            this.$firstProductImage.length || (this.settings.hasImages = !1),
            this.init();
        }
        var h,
          u = {
            onSale: 'sale-price',
            disabled: 'disabled',
            isModal: 'is-modal',
            loading: 'loading',
            loaded: 'loaded',
            hidden: 'hide',
            interactable: 'video-interactable',
            visuallyHide: 'visually-invisible',
          },
          p = {
            productVideo: '.product__video',
            videoParent: '.product__video-wrapper',
            currentSlide: '.slick-current',
            startingSlide: '.starting-slide',
          },
          m = {},
          f = [],
          g = {
            height: '480',
            width: '850',
            playerVars: {
              autohide: 0,
              autoplay: 0,
              branding: 0,
              cc_load_policy: 0,
              controls: 0,
              fs: 0,
              iv_load_policy: 3,
              modestbranding: 1,
              playsinline: 1,
              quality: 'hd720',
              rel: 0,
              showinfo: 0,
              wmode: 'opaque',
            },
          };
        return (
          (l.prototype = e.extend({}, l.prototype, {
            init: function () {
              this.inModal &&
                (this.$container.addClass(u.isModal),
                e('body')
                  .off('modalOpen.QuickShopModal-' + this.sectionId)
                  .off('modalClose.QuickShopModal-' + this.sectionId),
                e('body').on(
                  'modalOpen.QuickShopModal-' + this.sectionId,
                  this.openModalProduct.bind(this)
                ),
                e('body').on(
                  'modalClose.QuickShopModal-' + this.sectionId,
                  this.closeModalProduct.bind(this)
                )),
                this.inModal ||
                  (this.stringOverrides(),
                  this.formSetup(),
                  this.productSetup(),
                  this.checkIfVideos(),
                  this.createImageCarousels(),
                  this.customMediaListners());
            },
            formSetup: function () {
              theme.settings.dynamicVariantsEnable &&
                (this.$variantSelectors = e(this.selectors.formContainer).find(
                  this.selectors.singleOptionSelector
                )),
                this.initQtySelector(),
                this.initAjaxProductForm(),
                this.initVariants();
            },
            productSetup: function () {
              this.setImageSizes(),
                this.initImageSwitch(),
                this.initImageZoom(),
                this.initModelViewerLibraries(),
                this.initthemobilecaseXrLaunch();
            },
            stringOverrides: function () {
              (theme.productStrings = theme.productStrings || {}),
                e.extend(theme.strings, theme.productStrings);
            },
            setImageSizes: function () {
              if (this.settings.hasImages) {
                var e = this.$firstProductImage[0].currentSrc;
                e && (this.settings.imageSize = theme.Images.imageSize(e));
              }
            },
            initVariants: function () {
              if (document.getElementById(this.selectors.variantsJson)) {
                this.variantsObject = JSON.parse(
                  document.getElementById(this.selectors.variantsJson).innerHTML
                );
                var t = {
                  $container: this.$container,
                  enableHistoryState: this.settings.enableHistoryState,
                  singleOptionSelector: this.selectors.singleOptionSelector,
                  originalSelectorId: this.selectors.originalSelectorId,
                  variants: this.variantsObject,
                };
                e(this.selectors.variantColorSwatch).length &&
                  e(this.selectors.variantColorSwatch).on(
                    'change',
                    function (t) {
                      var i = e(t.currentTarget),
                        n = i.data('color-name'),
                        o = i.data('color-index');
                      this.updateColorName(n, o);
                    }.bind(this)
                  ),
                  (this.variants = new theme.Variants(t)),
                  this.$container
                    .on(
                      'variantChange' + this.settings.namespace,
                      this.updateCartButton.bind(this)
                    )
                    .on(
                      'variantImageChange' + this.settings.namespace,
                      this.updateVariantImage.bind(this)
                    )
                    .on(
                      'variantPriceChange' + this.settings.namespace,
                      this.updatePrice.bind(this)
                    )
                    .on(
                      'variantUnitPriceChange' + this.settings.namespace,
                      this.updateUnitPrice.bind(this)
                    ),
                  e(this.selectors.sku).length &&
                    this.$container.on(
                      'variantSKUChange' + this.settings.namespace,
                      this.updateSku.bind(this)
                    ),
                  (this.settings.inventory ||
                    this.settings.incomingInventory) &&
                    this.$container.on(
                      'variantChange' + this.settings.namespace,
                      this.updateInventory.bind(this)
                    ),
                  theme.settings.dynamicVariantsEnable &&
                    document.getElementById(
                      this.selectors.currentVariantJson
                    ) &&
                    ((this.currentVariantObject = JSON.parse(
                      document.getElementById(this.selectors.currentVariantJson)
                        .innerHTML
                    )),
                    this.$variantSelectors.on(
                      'change' + this.settings.namespace,
                      this.updateVariantAvailability.bind(this)
                    ),
                    this.setCurrentVariantAvailability(
                      this.currentVariantObject,
                      !0
                    ));
              }
            },
            updateColorName: function (t, i) {
              e('#VariantColorLabel-' + this.sectionId + '-' + i).text(t);
            },
            initQtySelector: function () {
              this.$container.find('.js-qty__wrapper').each(function () {
                new theme.QtySelector(e(this), { namespace: '.product' });
              });
            },
            initAjaxProductForm: function () {
              'drawer' === theme.settings.cartType &&
                new theme.AjaxProduct(e(this.selectors.formContainer));
            },
            setCurrentVariantAvailability: function (t) {
              var i = { option1: [], option2: [], option3: [] };
              this.disableVariantGroup(
                e(this.selectors.formContainer).find('.variant-input-wrap')
              );
              var n = this.variantsObject.filter(function (e) {
                  return (
                    t.id !== e.id &&
                    ((t.option2 === e.option2 && t.option3 === e.option3) ||
                      (t.option1 === e.option1 && t.option3 === e.option3) ||
                      (t.option1 === e.option1 && t.option2 === e.option2) ||
                      void 0)
                  );
                }),
                o = { variant: t };
              n = Object.assign({}, o, n);
              for (var a in n)
                if (n.hasOwnProperty(a)) {
                  var s = n[a],
                    r = s.option1,
                    d = s.option2,
                    c = s.option3;
                  r && i.option1.indexOf(r) === -1 && i.option1.push(r),
                    d && i.option2.indexOf(d) === -1 && i.option2.push(d),
                    c && i.option3.indexOf(c) === -1 && i.option3.push(c);
                }
              i.option1.length &&
                this.enableVariantOptionByValue(i.option1, 'option1'),
                i.option2.length &&
                  this.enableVariantOptionByValue(i.option2, 'option2'),
                i.option3.length &&
                  this.enableVariantOptionByValue(i.option3, 'option3');
            },
            updateVariantAvailability: function (t, i, n) {
              if (i && n)
                var o = i,
                  a = n;
              else
                var s = e(t.currentTarget),
                  o = s.val() ? s.val() : t.currentTarget.value,
                  a = s.data('index');
              var r = this.variantsObject.filter(function (e) {
                return e[a] === o;
              });
              e(this.selectors.formContainer)
                .find('.variant-input-wrap')
                .each(
                  function (t, i) {
                    var n = e(i),
                      o = n.data('index');
                    if (o !== a) {
                      this.disableVariantGroup(n);
                      for (var s = 0; s < r.length; s++)
                        this.enableVariantOption(n, r[s][o]);
                    }
                  }.bind(this)
                );
            },
            disableVariantGroup: function (e) {
              'dropdown' === theme.settings.dynamicVariantType
                ? e.find('option').prop('disabled', !0)
                : (e.find('input').prop('disabled', !0),
                  e.find('label').toggleClass('disabled', !0));
            },
            enableVariantOptionByValue: function (t, i) {
              for (
                var n = e(this.selectors.formContainer).find(
                    '.variant-input-wrap[data-index="' + i + '"]'
                  ),
                  o = 0;
                o < t.length;
                o++
              )
                this.enableVariantOption(n, t[o]);
            },
            enableVariantOption: function (e, t) {
              if (
                ((t = t.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, '\\$1')),
                'dropdown' === theme.settings.dynamicVariantType)
              )
                e.find('option[value="' + t + '"]').prop('disabled', !1);
              else {
                var i = e.find('.variant-input[data-value="' + t + '"]');
                i.find('input').prop('disabled', !1),
                  i.find('label').toggleClass('disabled', !1);
              }
            },
            updateCartButton: function (t) {
              var i = t.variant;
              if (i)
                if (i.available) {
                  e(this.selectors.addToCart)
                    .removeClass(u.disabled)
                    .prop('disabled', !1);
                  var n = e(this.selectors.addToCartText).data('default-text');
                  e(this.selectors.addToCartText).html(n);
                } else
                  e(this.selectors.addToCart)
                    .addClass(u.disabled)
                    .prop('disabled', !0),
                    e(this.selectors.addToCartText).html(theme.strings.soldOut);
              else
                e(this.selectors.addToCart)
                  .addClass(u.disabled)
                  .prop('disabled', !0),
                  e(this.selectors.addToCartText).html(
                    theme.strings.unavailable
                  );
            },
            updatePrice: function (t) {
              var i = t.variant;
              i &&
                (e(this.selectors.price)
                  .html(
                    theme.Currency.formatMoney(
                      i.price,
                      theme.settings.moneyFormat
                    )
                  )
                  .show(),
                i.compare_at_price > i.price
                  ? (e(this.selectors.comparePrice).html(
                      theme.Currency.formatMoney(
                        i.compare_at_price,
                        theme.settings.moneyFormat
                      )
                    ),
                    e(this.selectors.priceWrapper).removeClass(u.hidden),
                    e(this.selectors.price).addClass(u.onSale),
                    e(this.selectors.comparePriceA11y).attr(
                      'aria-hidden',
                      'false'
                    ),
                    e(this.selectors.priceA11y).attr('aria-hidden', 'false'))
                  : (e(this.selectors.priceWrapper).addClass(u.hidden),
                    e(this.selectors.price).removeClass(u.onSale),
                    e(this.selectors.comparePriceA11y).attr(
                      'aria-hidden',
                      'true'
                    ),
                    e(this.selectors.priceA11y).attr('aria-hidden', 'true')));
            },
            updateUnitPrice: function (t) {
              var i = t.variant;
              i && i.unit_price
                ? (e(this.selectors.unitPrice).html(
                    theme.Currency.formatMoney(
                      i.unit_price,
                      theme.settings.moneyFormat
                    )
                  ),
                  e(this.selectors.unitPriceBaseUnit).text(
                    theme.Currency.getBaseUnit(i)
                  ),
                  e(this.selectors.unitWrapper)
                    .removeClass(u.hidden)
                    .removeClass(u.visuallyHide))
                : e(this.selectors.unitWrapper).addClass(u.visuallyHide);
            },
            updateSku: function (t) {
              var i = t.variant,
                n = '';
              i && (i.sku && (n = i.sku), e(this.selectors.sku).html(n));
            },
            updateInventory: function (e) {
              var t = e.variant;
              if (
                !t ||
                !t.inventory_management ||
                'continue' === t.inventory_policy
              )
                return (
                  this.toggleInventoryQuantity(!1),
                  void this.toggleIncomingInventory(!1)
                );
              if (
                'themobilecase' === t.inventory_management &&
                window.inventories &&
                window.inventories[this.sectionId]
              ) {
                variantInventoryObject =
                  window.inventories[this.sectionId][t.id];
                var i = variantInventoryObject.quantity,
                  n = !0,
                  o = !1;
                (i <= 0 || i > theme.settings.inventoryThreshold) && (n = !1),
                  this.toggleInventoryQuantity(n, i),
                  !n && variantInventoryObject.incoming && (o = !0),
                  this.toggleIncomingInventory(
                    o,
                    t.available,
                    variantInventoryObject.next_incoming_date
                  );
              }
            },
            toggleInventoryQuantity: function (t, i) {
              this.settings.inventory || (t = !1),
                t
                  ? e(this.selectors.inventory)
                      .removeClass(u.hidden)
                      .text(theme.strings.stockLabel.replace('[count]', i))
                  : e(this.selectors.inventory).addClass(u.hidden);
            },
            toggleIncomingInventory: function (t, i, n) {
              if ((this.settings.incomingInventory || (t = !1), t)) {
                var o = i
                  ? theme.strings.willNotShipUntil.replace('[date]', n)
                  : theme.strings.willBeInStockAfter.replace('[date]', n);
                n || (o = theme.strings.waitingForStock),
                  e(this.selectors.incomingInventory)
                    .removeClass(u.hidden)
                    .text(o);
              } else e(this.selectors.incomingInventory).addClass(u.hidden);
            },
            checkIfVideos: function () {
              var t = this.$mainSlider.find(p.productVideo);
              if (!t.length) return !1;
              var i = [];
              return (
                t.each(function () {
                  var t = e(this).data('video-type');
                  i.indexOf(t) < 0 && i.push(t);
                }),
                i.indexOf('youtube') > -1 &&
                  (theme.config.youTubeReady
                    ? this.loadYoutubeVideos(t)
                    : (theme.LibraryLoader.load('youtubeSdk'),
                      e('body').on(
                        'youTubeReady' + this.settings.namespace,
                        function () {
                          this.loadYoutubeVideos(t);
                        }.bind(this)
                      ))),
                i.indexOf('mp4') > -1 && this.loadMp4Videos(t),
                i
              );
            },
            loadMp4Videos: function (t) {
              t.each(function () {
                var t = e(this);
                if ('mp4' == t.data('video-type')) {
                  var i = t.attr('id');
                  t.data('video-id');
                  m[i] = {
                    type: 'mp4',
                    divId: i,
                    style: t.data('video-style'),
                  };
                }
              });
            },
            loadYoutubeVideos: function (i) {
              i.each(function () {
                var i = e(this);
                if ('youtube' == i.data('video-type')) {
                  var n = i.attr('id'),
                    o = i.data('youtube-id');
                  m[n] = {
                    type: 'youtube',
                    id: n,
                    videoId: o,
                    style: i.data('video-style'),
                    loop: i.data('video-loop'),
                    attemptedToPlay: !1,
                    events: {
                      onReady: function (e) {
                        t(e, n);
                      },
                      onStateChange: function (e) {
                        s(e, n);
                      },
                    },
                  };
                }
              });
              for (var n in m)
                if ('youtube' === m[n].type && m.hasOwnProperty(n)) {
                  var o = e.extend({}, g, m[n]);
                  'muted' === o.style ||
                    ((o.playerVars.controls = 1), (o.playerVars.autoplay = 0)),
                    (f[n] = new YT.Player(n, o));
                }
              h = !0;
            },
            initVideo: function (e) {
              var t = e.data('video-type'),
                i = e.attr('id');
              'mp4' === t && 'muted' === m[i].style && this.playMp4Video(i),
                'youtube' === t &&
                  h &&
                  'muted' === m[i].style &&
                  this.requestToPlayYoutubeVideo(i),
                this.inModal && this.resizeSlides();
            },
            stopVideo: function (e, t) {
              e || (this.stopYoutubeVideo(), this.stopMp4Video()),
                'youtube' === t && this.stopYoutubeVideo(e),
                'mp4' === t && this.stopMp4Video(e);
            },
            getVideoType: function (e) {
              return e.data('video-type');
            },
            getVideoId: function (e) {
              return e.attr('id');
            },
            requestToPlayYoutubeVideo: function (t, i) {
              if (theme.config.youTubeReady) {
                var n = e('#' + t);
                return (
                  r(n),
                  'function' != typeof f[t].playVideo
                    ? void setTimeout(
                        function () {
                          this.playYoutubeVideo(t, i);
                        }.bind(this),
                        1e3
                      )
                    : void this.playYoutubeVideo(t, i)
                );
              }
            },
            playYoutubeVideo: function (t, n) {
              var o = e('#' + t);
              d(o),
                'function' == typeof f[t].playVideo && f[t].playVideo(),
                n || i(t);
            },
            stopYoutubeVideo: function (t) {
              if (theme.config.youTubeReady)
                if (t && f[t])
                  'function' == typeof f[t].pauseVideo && f[t].pauseVideo(),
                    e(window).off('scroll.' + t);
                else
                  for (key in f) {
                    var i = this.$container.find('#' + key);
                    i.length &&
                      'function' == typeof f[key].pauseVideo &&
                      (f[key].pauseVideo(), e(window).off('scroll.' + key));
                  }
            },
            playMp4Video: function (t) {
              var i = e('#' + t);
              d(i);
              var n = i[0].play();
              void 0 !== n &&
                n
                  .then(function () {})
                  .catch(function (e) {
                    i[0].setAttribute('controls', ''),
                      i
                        .closest(p.videoParent)
                        .attr('data-video-style', 'unmuted');
                  });
            },
            stopMp4Video: function (t) {
              if (t) e('#' + t)[0].pause();
              else
                for (var i in m) {
                  var n = this.$container.find('#' + i);
                  if (n.length && 'mp4' === m[i].type) {
                    var o = e('#' + m[i].divId)[0];
                    o && 'function' == typeof o.pause && o.pause();
                  }
                }
            },
            initImageSwitch: function () {
              if (e(this.selectors.photoThumbs).length) {
                e(this.selectors.photoThumbs)
                  .on('click', function (e) {
                    e.preventDefault();
                  })
                  .on(
                    'focus',
                    function (t) {
                      if (this.settings.slickThumbInitialized) {
                        var i = e(t.currentTarget).data('index');
                        void 0 !== i && this.$thumbSlider.slick('slickGoTo', i);
                      }
                    }.bind(this)
                  )
                  .on(
                    'keydown',
                    function (e) {
                      13 === e.keyCode &&
                        this.$container.find(p.currentSlide).focus();
                    }.bind(this)
                  );
              }
            },
            initImageZoom: function () {
              var t = e(this.selectors.imageContainer, this.$container);
              new theme.Photoswipe(t[0], this.sectionId);
            },
            updateVariantImage: function (t) {
              var i = t.variant,
                n =
                  (theme.Images.getSizedImageUrl(
                    i.featured_media.preview_image.src,
                    this.settings.imageSize
                  ),
                  e('.product__thumb[data-id="' + i.featured_media.id + '"]')),
                o = this._slideIndex(n.closest('.product__thumb-item'));
              'undefined' != typeof o && this.$mainSlider.slick('slickGoTo', o);
            },
            createImageCarousels: function () {
              if (
                !this.$thumbSlider.length ||
                e(this.selectors.photoThumbs).length < 2
              ) {
                var t = e(this.selectors.productImageMain).find(p.productVideo);
                return void (t.length && this.initVideo(t));
              }
              this.settings.hasMultipleImages = !0;
              var i = this.$mainSlider.find('.starting-slide'),
                n = this._slideIndex(i);
              this.$mainSlider.off('init'),
                this.$mainSlider.off('beforeChange'),
                this.$mainSlider.on('init', this.mainSlideInit.bind(this)),
                this.$mainSlider.on(
                  'beforeChange',
                  this.beforeSlideChange.bind(this)
                ),
                this.$thumbSlider.on('init', this.thumbSlideInit.bind(this));
              var o = (this.settings.thumbVertical =
                  'beside' === this.$thumbSlider.data('position')),
                a = (this.settings.thumbArrows = this.$thumbSlider.data(
                  'arrows'
                ));
              this.$mainSlider.slick({
                accessibility: !1,
                adaptiveHeight: !0,
                asNavFor: this.selectors.thumbSlider,
                infinite: !1,
                arrows: !1,
                dots: !1,
                initialSlide: n,
                appendDots: this.selectors.dotsContainer,
              }),
                this.$thumbSlider.slick({
                  accessibility: !1,
                  asNavFor: this.selectors.mainSlider,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: a,
                  dots: !1,
                  vertical: o,
                  verticalSwiping: o,
                  focusOnSelect: !0,
                  infinite: !1,
                  customHeightMatching: !a && o,
                  customSlideAdvancement: !0,
                  initialSlide: n,
                }),
                AOS && AOS.refresh();
            },
            destroyImageCarousels: function () {
              this.$mainSlider &&
                this.settings.slickMainInitialized &&
                (this.$mainSlider.slick('unslick'),
                (this.settings.slickMainInitialized = !1)),
                this.$thumbSlider &&
                  this.settings.slickThumbInitialized &&
                  (this.$thumbSlider.slick('unslick'),
                  (this.settings.slickThumbInitialized = !1)),
                (this.settings.slickMainInitialized = !1),
                (this.settings.slickThumbInitialized = !1);
            },
            mainSlideInit: function (e, t) {
              var i = t.$slider,
                n = i.find(p.currentSlide),
                o = n.find(p.productVideo);
              (this.settings.slickMainInitialized = !0),
                (this.settings.currentSlideIndex = n.data('slick-index')),
                o.length && this.initVideo(o);
            },
            thumbSlideInit: function (e, t) {
              (this.settings.slickThumbInitialized = !0),
                this.settings.thumbArrows &&
                  this.$thumbSlider.on(
                    'setPosition',
                    this.thumbSlideArrowVisibility.bind(this)
                  );
            },
            thumbSlideArrowVisibility: function (e, t) {
              var i = t.$slider,
                n = i.find('.slick-arrow'),
                o = !1;
              if (this.settings.thumbVertical) {
                var a = i.find('.slick-track').height();
                a >= i.height() && (o = !0);
              } else {
                var s = i.find('.slick-track').width();
                s >= i.width() && (o = !0);
              }
              o ? n.removeClass(u.hidden) : n.addClass(u.hidden);
            },
            beforeSlideChange: function (t, i, n, o) {
              if (this.settings.currentSlideIndex !== o) {
                this.settings.currentSlideIndex = o;
                var a = i.$slider,
                  s = a.find(p.currentSlide),
                  r = a.find('.slick-slide[data-slick-index="' + o + '"]');
                s.attr('tabindex', '-1'), r.attr('tabindex', 0);
                var c = s.find('.product__video');
                if (n !== o && c.length) {
                  var l = this.getVideoType(c),
                    u = this.getVideoId(c);
                  u && this.stopVideo(u, l);
                }
                var f = r.find('.product__video');
                if (f.length) {
                  var g = this.getVideoType(f),
                    v = this.getVideoId(f);
                  v &&
                    'youtube' === g &&
                    (h
                      ? m[v] &&
                        'muted' === m[v].style &&
                        this.requestToPlayYoutubeVideo(v, !0)
                      : e('body').on(
                          'youTubeReady' + this.settings.namespace,
                          function () {
                            m[v] &&
                              'muted' === m[v].style &&
                              this.requestToPlayYoutubeVideo(v, !0);
                          }.bind(this)
                        )),
                    v &&
                      m[v] &&
                      'muted' === m[v].style &&
                      'mp4' === g &&
                      this.playMp4Video(v),
                    v && m[v] && 'muted' != m[v].style && d(e('#' + v));
                }
                var y = s.find(this.selectors.media);
                y.length && y.trigger('mediaHidden');
                var b = r.find(this.selectors.media);
                b.length &&
                  (b.trigger('mediaVisible'),
                  r
                    .find('.themobilecase-model-viewer-ui__button')
                    .attr('tabindex', 0),
                  r.find('.product-single__close-media').attr('tabindex', 0));
              }
            },
            resizeSlides: function () {
              this.settings.hasMultipleImages &&
                (e(window).trigger('resize.slick'),
                setTimeout(
                  function () {
                    this.$mainSlider &&
                      this.settings.slickMainInitialized &&
                      this.$mainSlider.slick('setPosition'),
                      this.$thumbSlider &&
                        this.settings.slickThumbInitialized &&
                        this.$thumbSlider.slick('setPosition');
                  }.bind(this),
                  500
                ));
            },
            _slideIndex: function (e) {
              return e.data('index');
            },
            openModalProduct: function () {
              if (!this.settings.modalInit) {
                var t = e(this.selectors.modalFormHolder),
                  i = t.data('url'),
                  n = t.data('template');
                n || (i += '?view=ajax'),
                  t.load(
                    i + ' #AddToCartForm-' + this.sectionId,
                    function () {
                      this.formSetup(),
                        themobilecase &&
                          themobilecase.PaymentButton &&
                          themobilecase.PaymentButton.init();
                    }.bind(this)
                  ),
                  this.productSetup(),
                  this.loadModalContent(),
                  this.createImageCarousels(),
                  this.customMediaListners(),
                  (this.settings.modalInit = !0);
              }
              this.resizeSlides();
            },
            closeModalProduct: function () {
              this.stopVideo(),
                e('body').off(this.settings.namespace),
                e(window).off(this.settings.namespace);
            },
            loadModalContent: function () {
              var t = this.checkIfVideos();
              t &&
                t.indexOf('mp4') > -1 &&
                this.$modal
                  .find('.product__video[data-video-type="mp4"]')
                  .find('.product__video-src')
                  .each(
                    function (t, i) {
                      var n = e(i),
                        o = n.attr('src'),
                        a = n.attr('type'),
                        s = document.createElement('source');
                      (s.src = o), (s.type = a), n.after(s);
                    }.bind(this)
                  );
            },
            initModelViewerLibraries: function () {
              var t = e(this.selectors.media, this.$container);
              t.length < 1 || theme.ProductMedia.init(t, this.sectionId);
            },
            initthemobilecaseXrLaunch: function () {
              var t = this;
              e(document).on('themobilecase_xr_launch', function () {
                var i = e(
                  t.selectors.productMediaWrapper + ':not(.' + u.hidden + ')',
                  t.$container
                );
                i.trigger('xrLaunch');
              });
            },
            customMediaListners: function () {
              e('body').on(
                'click',
                this.selectors.closeMedia,
                function () {
                  this.$mainSlider
                    .find(p.currentSlide)
                    .find(this.selectors.media)
                    .trigger('mediaHidden');
                }.bind(this)
              ),
                this.$container
                  .find('model-viewer')
                  .on(
                    'themobilecase_model_viewer_ui_toggle_play',
                    function (e) {
                      this.mediaLoaded(e);
                    }.bind(this)
                  )
                  .on(
                    'themobilecase_model_viewer_ui_toggle_pause',
                    function (e) {
                      this.mediaUnloaded(e);
                    }.bind(this)
                  );
            },
            mediaLoaded: function (e) {
              this.$container
                .find(this.selectors.closeMedia)
                .removeClass(u.hidden),
                this.toggleSliderSwiping(!1);
            },
            mediaUnloaded: function (e) {
              this.$container
                .find(this.selectors.closeMedia)
                .addClass(u.hidden),
                this.toggleSliderSwiping(!0);
            },
            toggleSliderSwiping: function (e) {
              this.$mainSlider &&
                this.settings.slickMainInitialized &&
                (this.$mainSlider.slick('slickSetOption', 'swipe', e),
                this.$mainSlider.slick('slickSetOption', 'draggable', e),
                this.$mainSlider.slick('slickSetOption', 'touchMove', e),
                this.$mainSlider.slick('slickSetOption', 'accessibility', e));
            },
            onUnload: function () {
              this.$container.off(this.settings.namespace),
                e('body').off(this.settings.namespace),
                this.destroyImageCarousels(),
                theme.ProductMedia.removeSectionModels(this.sectionId);
            },
          })),
          l
        );
      })()),
      (theme.Recommendations = (function () {
        function t(t) {
          var i = (this.$container = e(t)),
            n = (this.sectionId = i.attr('data-section-id'));
          (this.url = i.data('url')),
            (this.selectors = {
              recommendations: '#Recommendations-' + n,
              placeholder: '.product-recommendations-placeholder',
              sectionClass: ' .product-recommendations',
              productResults: '.grid-product',
            }),
            this.init();
        }
        return (
          (t.prototype = e.extend({}, t.prototype, {
            init: function () {
              var t = e(this.selectors.recommendations);
              if (t.length && t.data('enable') !== !1) {
                var i = t.find(this.selectors.placeholder),
                  n = t.data('product-id'),
                  o = t.data('limit'),
                  a =
                    this.url +
                    '?section_id=product-recommendations&limit=' +
                    o +
                    '&product_id=' +
                    n;
                i.load(
                  a + this.selectors.sectionClass,
                  function (i) {
                    theme.reinitProductGridItem(t),
                      this.updateVariantInventory(t),
                      0 ===
                        e(i)
                          .find(this.selectors.sectionClass)
                          .find(this.selectors.productResults).length &&
                        t.addClass('hide');
                  }.bind(this)
                );
              }
            },
            updateVariantInventory: function (t) {
              (window.inventories = window.inventories || {}),
                t.find('.js-product-inventory-data').each(function () {
                  var t = e(this),
                    i = t.data('section-id');
                  (window.inventories[i] = {}),
                    e('.js-variant-inventory-data', t).each(function () {
                      var t = e(this);
                      window.inventories[i][t.data('id')] = {
                        quantity: t.data('quantity'),
                        incoming: t.data('incoming'),
                        next_incoming_date: t.data('date'),
                      };
                    });
                });
            },
          })),
          t
        );
      })()),
      (theme.Collection = (function () {
        function t(t) {
          (this.container = t),
            (this.sectionId = e(t).attr('data-section-id')),
            (this.namespace = '.collection-' + this.sectionId);
          var i = (this.$heroContainer = e(t).find('.collection-hero'));
          if (i.length) {
            if (
              (this.checkIfNeedReload(),
              theme.loadImageSection(i),
              e(t).data('parallax'))
            ) {
              var o = e(t).find(n.parallaxContainer),
                a = { namespace: this.namespace };
              theme.parallaxSections[this.namespace] = new theme.Parallax(o, a);
            }
          } else
            theme.settings.overlayHeader &&
              theme.headerNav.disableOverlayHeader();
          e(window).on(
            'popstate',
            function (e) {
              e && this.getNewCollectionContent(location.href);
            }.bind(this)
          ),
            this.init();
        }
        var i = !1,
          n = {
            sortSelect: '#SortBy',
            tags: '.tags',
            hero: '.collection-hero',
            title: '.collection-title',
            parallaxContainer: '.parallax-container',
          },
          o = { sortBy: 'data-default-sortby' },
          a = { activeTag: 'tag--active' };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            init: function () {
              (this.$container = e(this.container)),
                (this.sectionId = this.$container.attr('data-section-id')),
                (this.$sortSelect = e(n.sortSelect)),
                this.$sortSelect.on('change', this.onSortChange.bind(this)),
                (this.defaultSort = this.getDefaultSortValue()),
                this.initParams(),
                this.sortTags(),
                this.initTagAjax();
            },
            initTagAjax: function () {
              this.$container.on(
                'click' + this.namespace,
                '.tags a',
                function (t) {
                  var o = e(t.currentTarget);
                  if (!o.hasClass('no-ajax') && (t.preventDefault(), !i)) {
                    i = !0;
                    var s = o.attr('href');
                    e(n.tags)
                      .find('.' + a.activeTag)
                      .removeClass(a.activeTag),
                      o.parent().addClass(a.activeTag),
                      history.pushState({}, '', s),
                      e('.grid-product').addClass('unload'),
                      this.getNewCollectionContent(s);
                  }
                }.bind(this)
              );
            },
            getNewCollectionContent: function (t) {
              (t = t.indexOf('?') === -1 ? t + '?view=ajax' : t + '&view=ajax'),
                e('#CollectionAjaxResult').load(
                  t + ' #CollectionAjaxContent',
                  function (e) {
                    (i = !1), this.reInit(e);
                  }.bind(this)
                );
            },
            initParams: function () {
              if (((this.queryParams = {}), location.search.length))
                for (
                  var e, t = location.search.substr(1).split('&'), i = 0;
                  i < t.length;
                  i++
                )
                  (e = t[i].split('=')),
                    e.length > 1 &&
                      (this.queryParams[
                        decodeURIComponent(e[0])
                      ] = decodeURIComponent(e[1]));
            },
            getSortValue: function () {
              return this.$sortSelect.val() || this.defaultSort;
            },
            getDefaultSortValue: function () {
              return this.$sortSelect.attr(o.sortBy);
            },
            onSortChange: function () {
              (this.queryParams.sort_by = this.getSortValue()),
                this.queryParams.page && delete this.queryParams.page,
                (window.location.search = e.param(this.queryParams));
            },
            sortTags: function () {
              var t = e('#SortTags');
              t.length &&
                t.on('change', function () {
                  location.href = e(this).val();
                });
            },
            reInit: function (t) {
              for (var i = 0; i < sections.instances.length; i++) {
                var o = sections.instances[i];
                'collection-template' === o.type && o.forceReload();
              }
              if (t) {
                var a = e(t).find(n.title).text();
                e(n.title).text(a);
              }
              theme.reinitProductGridItem();
            },
            forceReload: function () {
              this.onUnload(), this.init();
            },
            checkIfNeedReload: function () {
              themobilecase.designMode &&
                theme.settings.overlayHeader &&
                (e('.header-wrapper').hasClass('header-wrapper--overlay') ||
                  location.reload());
            },
            onUnload: function () {
              e(window).off(this.namespace),
                this.$container.off(this.namespace),
                theme.parallaxSections[this.namespace] &&
                  (theme.parallaxSections[this.namespace].destroy(),
                  delete theme.parallaxSections[this.namespace]);
            },
          })),
          t
        );
      })()),
      (theme.CollectionSwitcher = (function () {
        function t(t) {
          (this.$container = e(t)),
            (this.sectionId = this.$container.attr('data-section-id')),
            (this.config = {
              perRow: this.$container.attr('data-per-row'),
              perRowMobile: 2,
            }),
            (this.sliderArgs = {
              arrows: !0,
              infinite: !1,
              slidesToShow: this.config.perRow,
              slidesToScroll: this.config.perRow,
            }),
            (this.$activeSlider = null),
            this.init();
        }
        var i = {
          trigger: '.collection-switcher__trigger',
          collection: '.collection-switcher__collection',
          slider: '.collection-switcher__collection-grid',
        };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            init: function () {
              (this.$triggers = this.$container.find(i.trigger)),
                (this.$collections = this.$container.find(i.collection));
              var t = this.$container.find(i.slider).first();
              t.length &&
                (this.initSlider(t),
                e('body').on(
                  'matchSmall unmatchSmall',
                  function () {
                    this.initSlider();
                  }.bind(this)
                )),
                this.$triggers.on('click', this.switch.bind(this));
            },
            initSlider: function (e) {
              this.$activeSlider &&
                this.$activeSlider.off('afterChange').slick('unslick'),
                e || (e = this.$activeSlider),
                e.length &&
                  (theme.config.bpSmall
                    ? ((this.sliderArgs.slidesToShow = this.config.perRowMobile),
                      (this.sliderArgs.slidesToScroll = this.config.perRowMobile))
                    : ((this.sliderArgs.slidesToShow = parseInt(
                        this.config.perRow
                      )),
                      (this.sliderArgs.slidesToScroll = parseInt(
                        this.config.perRow
                      ))),
                  (this.$activeSlider = e.slick(this.sliderArgs)),
                  AOS && AOS.refresh());
            },
            switch: function (t) {
              t.preventDefault(), this.$triggers.removeClass('is-active');
              var n = e(t.currentTarget)
                  .addClass('is-active')
                  .attr('aria-controls'),
                o = e('#' + n),
                a = o.find(i.slider);
              this.$collections.addClass('hide'),
                o.removeClass('hide'),
                this.initSlider(a);
            },
            onUnload: function () {},
          })),
          t
        );
      })()),
      (theme.HeaderSection = (function () {
        function t(t) {
          for (
            var i = (this.$container = e(t)),
              n = ((this.sectionId = i.attr('data-section-id')), 0);
            n < sections.instances.length;
            n++
          ) {
            var o = sections.instances[n];
            'slideshow-section' === o.type && o.forceReload();
          }
          this.initDrawers(),
            theme.headerNav.init(),
            theme.announcementBar.init();
        }
        var i = {
            drawer: '#NavDrawer',
            mobileSubNavToggle: '.mobile-nav__toggle-btn',
            hasSublist: '.mobile-nav__has-sublist',
          },
          n = { navExpanded: 'mobile-nav--expanded' };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            initDrawers: function () {
              (theme.NavDrawer = new theme.Drawers('NavDrawer', 'nav')),
                'drawer' === theme.settings.cartType && new theme.CartDrawer(),
                this.drawerMenuButtons();
            },
            drawerMenuButtons: function () {
              e(i.drawer)
                .find('.js-drawer-close')
                .on('click', function (e) {
                  e.preventDefault(), theme.NavDrawer.close();
                });
              var t = e(i.mobileSubNavToggle);
              t.attr('aria-expanded', 'false'),
                t.each(function (t, i) {
                  var n = e(i);
                  n.attr('aria-controls', n.attr('data-aria-controls'));
                }),
                t.on('click', function () {
                  var t = e(this),
                    o = t.attr('aria-expanded'),
                    a = !1;
                  'true' === o
                    ? t.attr('aria-expanded', 'false')
                    : (t.attr('aria-expanded', 'true'), (a = !0)),
                    t.closest(i.hasSublist).toggleClass(n.navExpanded, a);
                });
            },
            onUnload: function () {
              theme.NavDrawer.close(),
                theme.headerNav.unload(),
                theme.announcementBar.unload();
            },
          })),
          t
        );
      })()),
      (theme.FooterSection = (function () {
        function t(t) {
          this.$container = e(t);
          (this.cache = {}),
            this.cacheSelectors(),
            this.cache.$localeDisclosure.length &&
              (this.localeDisclosure = new theme.Disclosure(
                this.cache.$localeDisclosure
              )),
            this.cache.$currencyDisclosure.length &&
              (this.currencyDisclosure = new theme.Disclosure(
                this.cache.$currencyDisclosure
              ));
        }
        var i = {
          disclosureLocale: '[data-disclosure-locale]',
          disclosureCurrency: '[data-disclosure-currency]',
        };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            cacheSelectors: function () {
              this.cache = {
                $localeDisclosure: this.$container.find(i.disclosureLocale),
                $currencyDisclosure: this.$container.find(i.disclosureCurrency),
              };
            },
            onUnload: function () {
              this.cache.$localeDisclosure.length &&
                this.localeDisclosure.unload(),
                this.cache.$currencyDisclosure.length &&
                  this.currencyDisclosure.unload();
            },
          })),
          t
        );
      })()),
      (theme.FeaturedContentSection = (function () {
        function t() {
          e('.rte').find('a:not(:has(img))').addClass('text-link');
        }
        return t;
      })()),
      (theme.slideshows = {}),
      (theme.SlideshowSection = (function () {
        function t(t) {
          var n = (this.$container = e(t)),
            o = (n.parent(), n.attr('data-section-id'));
          this.slideshow = '#Slideshow-' + o;
          this.namespace = '.' + o;
          var a = e(t).find('.hero');
          if (
            (a.length && theme.loadImageSection(a),
            this.init(),
            n.data('parallax'))
          ) {
            var s = { namespace: this.namespace };
            theme.parallaxSections[this.namespace] = new theme.Parallax(
              n.find(i.parallaxContainer),
              s
            );
          }
        }
        var i = { parallaxContainer: '.parallax-container' };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            init: function () {
              var t = {
                arrows: e(this.slideshow).data('arrows'),
                dots: e(this.slideshow).data('dots'),
                fade: !!this.$container.data('parallax'),
                speed: 500,
              };
              theme.slideshows[this.slideshow] = new theme.Slideshow(
                this.slideshow,
                t
              );
            },
            forceReload: function () {
              this.onUnload(), this.init();
            },
            onUnload: function () {
              theme.parallaxSections[this.namespace] &&
                (theme.parallaxSections[this.namespace].destroy(),
                delete theme.parallaxSections[this.namespace]),
                theme.slideshows[this.slideshow] &&
                  (theme.slideshows[this.slideshow].destroy(),
                  delete theme.slideshows[this.slideshow]);
            },
            onSelect: function () {
              e(this.slideshow).slick('slickPause');
            },
            onDeselect: function () {
              e(this.slideshow).slick('slickPlay');
            },
            onBlockSelect: function (t) {
              var i = e(this.slideshow),
                n = e(
                  '.slideshow__slide--' +
                    t.detail.blockId +
                    ':not(.slick-cloned)'
                ),
                o = n.data('slick-index');
              i.slick('slickGoTo', o).slick('slickPause');
            },
            onBlockDeselect: function () {
              e(this.slideshow).slick('slickPlay');
            },
          })),
          t
        );
      })()),
      (theme.VideoSection = (function () {
        function t(t) {
          var n = (this.$container = e(t)),
            o =
              ((this.sectionId = n.attr('data-section-id')),
              (this.youtubePlayerId = 'YouTubeVideo-' + this.sectionId));
          this.namespace = '.' + o;
          var a = (this.vimeoPlayerId = 'Vimeo-' + this.sectionId),
            s =
              ((this.$vimeoTrigger = e('#VimeoTrigger-' + this.sectionId)),
              'Mp4Video-' + this.sectionId),
            r = e('#' + o),
            d = e('#' + a),
            h = e('#' + s);
          (this.vimeoPlayer = []),
            r.length &&
              ((this.youtubeVideoId = r.data('video-id')),
              this.initYoutubeVideo()),
            d.length &&
              ((this.vimeoVideoId = d.data('video-id')), this.initVimeoVideo()),
            h.length &&
              (c(h),
              i(s)
                .then(function () {})
                .catch(function (e) {
                  h.attr('controls', ''), l(h);
                }));
        }
        function i(e) {
          return document.querySelector('#' + e).play();
        }
        function n(t, i) {
          var n = e('#' + i),
            a = n.attr('id');
          p[a] = t.target;
          p[a];
          d(n),
            p[a].mute(),
            n.attr('tabindex', '-1'),
            o(a),
            e(window).on('scroll.' + a, { id: a }, e.throttle(150, o));
        }
        function o(t) {
          var i;
          (i = 'string' == typeof t ? t : t.data.id),
            theme.isElementVisible(e('#' + i)) ? a(i) : s(i);
        }
        function a(e) {
          p[e] && 'function' == typeof p[e].playVideo && p[e].playVideo();
        }
        function s(e) {
          p[e] && 'function' == typeof p[e].pauseVideo && p[e].pauseVideo();
        }
        function r(t, i) {
          var n = e('#' + i),
            o = n.attr('id'),
            a = p[o];
          switch (t.data) {
            case -1:
              u[o].attemptedToPlay && (c(n), l(n));
              break;
            case 0:
              a.playVideo();
              break;
            case 1:
              c(n);
              break;
            case 3:
              u[o].attemptedToPlay = !0;
          }
        }
        function d(e) {
          e.closest(v.videoParent).addClass(y.loading);
        }
        function c(e) {
          e.closest(v.videoParent).removeClass(y.loading).addClass(y.loaded);
        }
        function l(e) {
          e.closest(v.videoParent).addClass(y.interactable);
        }
        var h,
          u = [],
          p = [],
          m = {
            width: 1280,
            height: 720,
            playerVars: {
              autohide: 0,
              branding: 0,
              cc_load_policy: 0,
              controls: 0,
              fs: 0,
              iv_load_policy: 3,
              modestbranding: 1,
              playsinline: 1,
              quality: 'hd720',
              rel: 0,
              showinfo: 0,
              wmode: 'opaque',
            },
          },
          f = !1,
          g = { byline: !1, title: !1, portrait: !1, loop: !0 },
          v = { videoParent: '.video-parent-section' },
          y = {
            loading: 'loading',
            loaded: 'loaded',
            interactable: 'video-interactable',
          };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            initYoutubeVideo: function () {
              (u[this.youtubePlayerId] = {
                id: this.youtubePlayerId,
                videoId: this.youtubeVideoId,
                type: 'youtube',
                attemptedToPlay: !1,
                events: {
                  onReady: function (e) {
                    n(e, this.youtubePlayerId);
                  }.bind(this),
                  onStateChange: function (e) {
                    r(e, this.youtubePlayerId);
                  }.bind(this),
                },
              }),
                h
                  ? this.loadYoutubeVideo()
                  : (theme.LibraryLoader.load('youtubeSdk'),
                    e('body').on(
                      'youTubeReady' + this.namespace,
                      this.loadYoutubeVideo.bind(this)
                    ));
            },
            loadYoutubeVideo: function () {
              var t = e.extend({}, m, u[this.youtubePlayerId]);
              (t.playerVars.controls = 0),
                (p[this.youtubePlayerId] = new YT.Player(
                  this.youtubePlayerId,
                  t
                )),
                (h = !0);
            },
            initVimeoVideo: function () {
              u[this.vimeoPlayerId] = {
                divId: this.vimeoPlayerId,
                id: this.vimeoVideoId,
                type: 'vimeo',
              };
              var t = e('#' + this.vimeoPlayerId);
              d(t),
                this.$vimeoTrigger.on(
                  'click',
                  +this.namespace,
                  function (e) {
                    this.requestToPlayVimeoVideo(this.vimeoPlayerId);
                  }.bind(this)
                ),
                f
                  ? this.loadVimeoVideo()
                  : (window.loadVimeo(),
                    e('body').on(
                      'vimeoReady' + this.namespace,
                      this.loadVimeoVideo.bind(this)
                    ));
            },
            loadVimeoVideo: function () {
              var t = e.extend({}, g, u[this.vimeoPlayerId]);
              if (
                ((this.vimeoPlayer[this.vimeoPlayerId] = new Vimeo.Player(
                  u[this.vimeoPlayerId].divId,
                  t
                )),
                (f = !0),
                theme.config.bpSmall)
              ) {
                var i = e('#' + this.vimeoPlayerId);
                c(i);
              } else this.requestToPlayVimeoVideo(this.vimeoPlayerId);
            },
            requestToPlayVimeoVideo: function (t) {
              return f
                ? void this.playVimeoVideo(t)
                : void e('body').on(
                    'vimeoReady' + this.namespace,
                    function () {
                      this.playVimeoVideo(t);
                    }.bind(this)
                  );
            },
            playVimeoVideo: function (t) {
              this.vimeoPlayer[t].play(), this.vimeoPlayer[t].setVolume(0);
              var i = e('#' + t);
              c(i);
            },
            onUnload: function (t) {
              var i = t.target.id.replace('themobilecase-section-', ''),
                n = 'YouTubeVideo-' + i;
              p[n].destroy(),
                e(window).off('scroll' + this.namespace),
                e('body').off('vimeoReady' + this.namespace);
            },
          })),
          t
        );
      })()),
      (theme.BackgroundImage = (function () {
        function t(t) {
          var n = e(t),
            o = n.attr('data-section-id');
          if (((this.namespace = '.' + o), n.length && n.data('parallax'))) {
            var a = n.find(i.parallaxContainer),
              s = { namespace: this.namespace, desktopOnly: !0 };
            theme.parallaxSections[this.namespace] = new theme.Parallax(a, s);
          }
        }
        var i = { parallaxContainer: '.parallax-container' };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            onUnload: function (e) {
              theme.parallaxSections[this.namespace].destroy(),
                delete theme.parallaxSections[this.namespace];
            },
          })),
          t
        );
      })()),
      (theme.Testimonials = (function () {
        function t(t) {
          var o = (this.$container = e(t)),
            a = o.attr('data-section-id'),
            s =
              ((this.wrapper = '.testimonials-wrapper'),
              (this.slider = '#Testimonials-' + a)),
            r = e(s);
          this.sliderActive = !1;
          var d = e.extend({}, n, {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: !0,
          });
          (i = r.data('count')),
            i < n.slidesToShow &&
              ((n.slidesToShow = i), (n.slidesToScroll = i)),
            r.on('init', this.a11y.bind(this)),
            theme.config.bpSmall ? this.init(r, d) : this.init(r, n),
            e('body').on(
              'matchSmall',
              function () {
                this.init(r, d);
              }.bind(this)
            ),
            e('body').on(
              'unmatchSmall',
              function () {
                this.init(r, n);
              }.bind(this)
            );
        }
        var i = 0,
          n = {
            accessibility: !0,
            arrows: !1,
            dots: !0,
            autoplay: !1,
            touchThreshold: 20,
            slidesToShow: 3,
            slidesToScroll: 3,
          };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            onUnload: function () {
              e(this.slider, this.wrapper).slick('unslick');
            },
            onBlockSelect: function (t) {
              var i = e(
                  '.testimonials-slide--' +
                    t.detail.blockId +
                    ':not(.slick-cloned)'
                ),
                n = i.data('slick-index');
              e(this.slider, this.wrapper).slick('slickGoTo', n);
            },
            init: function (e, t) {
              this.sliderActive &&
                (e.slick('unslick'), (this.sliderActive = !1)),
                e.slick(t),
                (this.sliderActive = !0),
                AOS && AOS.refresh();
            },
            a11y: function (t, i) {
              var n = i.$list,
                o = e(this.wrapper, this.$container);
              n.removeAttr('aria-live'),
                o.on('focusin', function (e) {
                  o.has(e.target).length && n.attr('aria-live', 'polite');
                }),
                o.on('focusout', function (e) {
                  o.has(e.target).length && n.removeAttr('aria-live');
                });
            },
          })),
          t
        );
      })()),
      (theme.NewsletterPopup = (function () {
        function t(t) {
          var i = (this.$container = e(t)),
            n = i.attr('data-section-id');
          if (
            ((this.cookieName = 'newsletter-' + n),
            i.length && '/challenge' !== window.location.pathname)
          ) {
            if (
              ((this.data = {
                secondsBeforeShow: i.data('delay-seconds'),
                daysBeforeReappear: i.data('delay-days'),
                cookie: Cookies.get(this.cookieName),
                testMode: i.data('test-mode'),
              }),
              (this.modal = new theme.Modals(
                'NewsletterPopup-' + n,
                'newsletter-popup-modal'
              )),
              (i.find('.errors').length || i.find('.note--success').length) &&
                this.modal.open(),
              i.find('.note--success').length)
            )
              return void this.closePopup(!0);
            e('body').on(
              'modalClose.' + i.attr('id'),
              this.closePopup.bind(this)
            ),
              (this.data.cookie && !this.data.testMode) ||
                this.initPopupDelay();
          }
        }
        return (
          (t.prototype = e.extend({}, t.prototype, {
            initPopupDelay: function () {
              setTimeout(
                function () {
                  this.modal.open();
                }.bind(this),
                1e3 * this.data.secondsBeforeShow
              );
            },
            closePopup: function (e) {
              if (this.data.testMode)
                return void Cookies.remove(this.cookieName, { path: '/' });
              var t = e ? 200 : this.data.daysBeforeReappear;
              Cookies.set(this.cookieName, 'opened', { path: '/', expires: t });
            },
            onLoad: function () {
              this.modal.open();
            },
            onSelect: function () {
              this.modal.open();
            },
            onDeselect: function () {
              this.modal.close();
            },
            onUnload: function () {},
          })),
          t
        );
      })()),
      (theme.FadingImages = (function () {
        function t(t) {
          var i = (this.$container = e(t)),
            n = i.attr('data-section-id');
          this.namespace = '.fading-images-' + n;
          if (i.length) {
            var o = i.find('.fading-images');
            theme.loadImageSection(o),
              (this.data = {
                isInit: !1,
                interval: i.data('interval'),
                block_count: i.data('count'),
                finish_interval: 1e3,
                timer_offset: 400,
                active_image: 1,
                active_title: 1,
                removed_compensation: !1,
              }),
              (this.selectors = {
                $allTitles: i.find('.fading-images-overlay__titles'),
              }),
              this.checkVisibility(),
              e(window).on(
                'scroll' + this.namespace,
                e.throttle(100, this.checkVisibility.bind(this))
              );
          }
        }
        var i = {
          activeImage: 'active-image',
          finishedImage: 'finished-image',
          activeTitles: 'active-titles',
          finishedTitles: 'finished-titles',
          compensation: 'compensation',
        };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            checkVisibility: function () {
              return this.data.isInit
                ? void e(window).off('scroll' + this.namespace)
                : void (
                    theme.isElementVisible(this.$container) &&
                    (this.startImages(),
                    this.startTitles(),
                    (this.data.isInit = !0))
                  );
            },
            nextImage: function () {
              var e = this.$container;
              this.data.removed_compensation ||
                (e
                  .find(
                    '.fading-images__item[data-slide-index=' +
                      this.data.active_image +
                      ']'
                  )
                  .removeClass(i.compensation),
                (this.data.removed_compensation = !0)),
                e
                  .find(
                    '.fading-images__item[data-slide-index=' +
                      this.data.active_image +
                      ']'
                  )
                  .removeClass(i.activeImage)
                  .addClass(i.finishedImage);
              var t = this.data.active_image;
              window.setTimeout(function () {
                e.find(
                  '.fading-images__item[data-slide-index=' + t + ']'
                ).removeClass(i.finishedImage);
              }, this.data.finish_interval),
                this.data.active_image++,
                this.data.active_image > this.data.block_count &&
                  (this.data.active_image = 1),
                e
                  .find(
                    '.fading-images__item[data-slide-index=' +
                      this.data.active_image +
                      ']'
                  )
                  .addClass(i.activeImage);
            },
            nextTitle: function () {
              var e = this.$container,
                t = this.selectors.$allTitles;
              this.selectors.$allTitles
                .removeClass(i.activeTitles)
                .addClass(i.finishedTitles),
                this.data.active_title++,
                this.data.active_title > this.data.block_count &&
                  (this.data.active_title = 1);
              var n = this.data.active_title;
              window.setTimeout(function () {
                var o = e
                    .find('.fading-images__item[data-slide-index=' + n + ']')
                    .attr('data-slide-title1'),
                  a = e
                    .find('.fading-images__item[data-slide-index=' + n + ']')
                    .attr('data-slide-title2');
                e.find('.fading-images-overlay__title--1').text(o),
                  e.find('.fading-images-overlay__title--2').text(a),
                  t.removeClass(i.finishedTitles).addClass(i.activeTitles);
              }, this.data.finish_interval - 200);
            },
            startImages: function () {
              this.$container
                .find(
                  '.fading-images__item[data-slide-index=' +
                    this.data.active_image +
                    ']'
                )
                .addClass(i.activeImage)
                .addClass(i.compensation),
                window.setTimeout(
                  function () {
                    window.setInterval(
                      this.nextImage.bind(this),
                      this.data.interval
                    );
                  }.bind(this),
                  this.data.timer_offset
                );
            },
            startTitles: function () {
              var e = this.$container,
                t = this.selectors.$allTitles,
                n = this.data.active_title;
              window.setTimeout(function () {
                var o = e
                    .find('.fading-images__item[data-slide-index=' + n + ']')
                    .attr('data-slide-title1'),
                  a = e
                    .find('.fading-images__item[data-slide-index=' + n + ']')
                    .attr('data-slide-title2');
                e.find('.fading-images-overlay__title--1').text(o),
                  e.find('.fading-images-overlay__title--2').text(a),
                  t.addClass(i.activeTitles);
              }, 750);
              window.setInterval(this.nextTitle.bind(this), this.data.interval);
            },
            onLoad: function () {},
            onSelect: function () {},
            onDeselect: function () {},
            onUnload: function () {},
          })),
          t
        );
      })()),
      (theme.Maps = (function () {
        function t(t) {
          (this.$container = e(t)),
            (this.sectionId = this.$container.attr('data-section-id')),
            (this.namespace = '.map-' + this.sectionId),
            (this.$map = this.$container.find(d.map)),
            (this.key = this.$map.data('api-key')),
            this.key &&
              (this.checkVisibility(),
              e(window).on(
                'scroll' + this.namespace,
                e.throttle(50, this.checkVisibility.bind(this))
              ));
        }
        function i() {
          e.each(s, function (e, t) {
            t.createMap();
          });
        }
        function n(t) {
          var i = e.Deferred(),
            n = new google.maps.Geocoder(),
            o = t.data('address-setting');
          return (
            n.geocode({ address: o }, function (e, t) {
              t !== google.maps.GeocoderStatus.OK && i.reject(t), i.resolve(e);
            }),
            i
          );
        }
        var o = { zoom: 14 },
          a = null,
          s = [],
          r = {
            addressNoResults: theme.strings.addressNoResults,
            addressQueryLimit: theme.strings.addressQueryLimit,
            addressError: theme.strings.addressError,
            authError: theme.strings.authError,
          },
          d = {
            section: '[data-section-type="map"]',
            map: '[data-map]',
            mapOverlay: '[data-map-overlay]',
          },
          c = {
            mapError: 'map-section--load-error',
            errorMsg: 'map-section__error errors text-center',
          };
        return (
          (window.gm_authFailure = function () {
            themobilecase.designMode &&
              (e(d.section).addClass(c.mapError),
              e(d.map).remove(),
              e(d.mapOverlay).after(
                '<div class="' +
                  c.errorMsg +
                  '">' +
                  theme.strings.authError +
                  '</div>'
              ));
          }),
          (t.prototype = e.extend({}, t.prototype, {
            prepMapApi: function () {
              'loaded' === a
                ? this.createMap()
                : (s.push(this),
                  'loading' !== a &&
                    ((a = 'loading'),
                    ('undefined' != typeof window.google &&
                      'undefined' != typeof window.google.maps) ||
                      e
                        .getScript(
                          'https://maps.googleapis.com/maps/api/js?key=' +
                            this.key
                        )
                        .then(function () {
                          (a = 'loaded'), i();
                        })));
            },
            createMap: function () {
              var t = this.$map;
              return n(t)
                .then(
                  function (i) {
                    var n = {
                        zoom: o.zoom,
                        backgroundColor: 'none',
                        center: i[0].geometry.location,
                        draggable: !1,
                        clickableIcons: !1,
                        scrollwheel: !1,
                        disableDoubleClickZoom: !0,
                        disableDefaultUI: !0,
                      },
                      a = (this.map = new google.maps.Map(t[0], n)),
                      s = (this.center = a.getCenter());
                    new google.maps.Marker({ map: a, position: a.getCenter() });
                    google.maps.event.addDomListener(
                      window,
                      'resize',
                      e.debounce(250, function () {
                        google.maps.event.trigger(a, 'resize'),
                          a.setCenter(s),
                          t.removeAttr('style');
                      })
                    );
                  }.bind(this)
                )
                .fail(function () {
                  var e;
                  switch (status) {
                    case 'ZERO_RESULTS':
                      e = r.addressNoResults;
                      break;
                    case 'OVER_QUERY_LIMIT':
                      e = r.addressQueryLimit;
                      break;
                    case 'REQUEST_DENIED':
                      e = r.authError;
                      break;
                    default:
                      e = r.addressError;
                  }
                  themobilecase.designMode &&
                    t
                      .parent()
                      .addClass(c.mapError)
                      .html('<div class="' + c.errorMsg + '">' + e + '</div>');
                });
            },
            checkVisibility: function () {
              theme.isElementVisible(this.$container, 600) &&
                (this.prepMapApi(), e(window).off(this.namespace));
            },
            onUnload: function () {
              0 !== this.$map.length &&
                google.maps.event.clearListeners(this.map, 'resize');
            },
          })),
          t
        );
      })()),
      (theme.Blog = (function () {
        function t(e) {
          this.tagFilters();
        }
        return (
          (t.prototype = e.extend({}, t.prototype, {
            tagFilters: function () {
              var t = e('#BlogTagFilter');
              t.length &&
                t.on('change', function () {
                  location.href = e(this).val();
                });
            },
            onUnload: function () {},
          })),
          t
        );
      })()),
      (theme.Photoswipe = (function () {
        function t(t, i) {
          (this.$container = e(t)),
            (this.sectionId = i),
            (this.namespace = '.photoswipe-' + this.sectionId),
            this.gallery,
            this.$images,
            (this.inSlideshow = !1),
            'false' !== this.$container.attr('data-zoom') &&
              ('true' === this.$container.attr('data-has-slideshow') &&
                (this.inSlideshow = !0),
              this.init());
        }
        var i = {
          trigger: '.js-photoswipe__zoom',
          images: '.photoswipe__image',
          activeImage: '.slick-active .photoswipe__image',
        };
        return (
          (t.prototype = e.extend({}, t.prototype, {
            init: function () {
              var t = this.$container.find(i.trigger);
              this.$images = this.$container.find(i.images);
              var n = [];
              t.on(
                'click' + this.namespace,
                function (t) {
                  if (((n = this.getImageData()), this.inSlideshow))
                    var o = this.$container.find(i.activeImage).data('index');
                  else var o = e(t.currentTarget).data('index');
                  this.initGallery(n, o);
                }.bind(this)
              );
            },
            getImageData: function () {
              var t = [];
              return (
                this.$images.each(function () {
                  var i = e(this).prop('currentSrc') || e(this).prop('src'),
                    n = {
                      msrc: i,
                      src: e(this).data('photoswipe-src'),
                      w: e(this).data('photoswipe-width'),
                      h: e(this).data('photoswipe-height'),
                      el: e(this)[0],
                      initialZoomLevel: 0.5,
                    };
                  t.push(n);
                }),
                t
              );
            },
            initGallery: function (e, t) {
              var i = document.querySelectorAll('.pswp')[0],
                n = {
                  allowPanToNext: !1,
                  captionEl: !1,
                  closeOnScroll: !1,
                  counterEl: !1,
                  history: !1,
                  index: t - 1,
                  pinchToClose: !1,
                  preloaderEl: !1,
                  scaleMode: 'zoom',
                  shareEl: !1,
                  tapToToggleControls: !1,
                  getThumbBoundsFn: function (t) {
                    var i =
                        window.pageYOffset ||
                        document.documentElement.scrollTop,
                      n = e[t].el,
                      o = n.getBoundingClientRect();
                    return { x: o.left, y: o.top + i, w: o.width };
                  },
                };
              (this.gallery = new PhotoSwipe(i, PhotoSwipeUI_Default, e, n)),
                this.gallery.init(),
                this.gallery.listen('afterChange', this.afterChange.bind(this));
            },
            afterChange: function () {
              if (this.inSlideshow) {
                var t = e('#ProductPhotos-' + this.sectionId);
                if (t.hasClass('slick-initialized')) {
                  var i = this.gallery.getCurrentIndex();
                  t.slick('slickGoTo', i);
                }
              }
            },
          })),
          t
        );
      })()),
      (theme.bp = {}),
      (theme.bp.smallUp = 590),
      (theme.bp.small = theme.bp.smallUp - 1),
      (theme.config = {
        bpSmall: !1,
        hasSessionStorage: !0,
        mediaQuerySmall: 'screen and (max-width: ' + theme.bp.small + 'px)',
        mediaQuerySmallUp: 'screen and (min-width: ' + theme.bp.smallUp + 'px)',
        youTubeReady: !1,
        vimeoReady: !1,
        vimeoLoading: !1,
        isTouch: !!(
          'ontouchstart' in window ||
          (window.DocumentTouch && window.document instanceof DocumentTouch) ||
          window.navigator.maxTouchPoints ||
          window.navigator.msMaxTouchPoints
        ),
        isIpad:
          /ipad/.test(window.navigator.userAgent.toLowerCase()) ||
          ('MacIntel' === window.navigator.platform &&
            window.navigator.maxTouchPoints > 1),
      }),
      theme.config.isIpad && (document.documentElement.className += ' js-ipad'),
      (window.onYouTubeIframeAPIReady = function () {
        (theme.config.youTubeReady = !0), e('body').trigger('youTubeReady');
      }),
      (window.loadVimeo = function () {
        if (!theme.config.vimeoLoading && !theme.config.vimeoReady) {
          theme.config.vimeoLoading = !0;
          var i = document.createElement('script');
          i.src = 'https://player.vimeo.com/api/player.js';
          var n = document.getElementsByTagName('script')[0];
          n.parentNode.insertBefore(i, n),
            t()
              .then(function () {
                (theme.config.vimeoReady = !0),
                  (theme.config.vimeoLoading = !1),
                  e('body').trigger('vimeoReady');
              })
              .fail(function () {});
        }
      }),
      (theme.init = function () {
        theme.setGlobals(),
          theme.pageTransitions(),
          theme.initQuickShop(),
          theme.settings.predictiveSearch && theme.predictiveSearch.init(),
          theme.videoModal(),
          theme.articleImages.init(),
          theme.customerTemplates.init(),
          theme.collapsibles.init(),
          theme.rte.init(),
          AOS.init({
            easing: 'ease-out-quad',
            once: !0,
            offset: 60,
            disableMutationObserver: !0,
          }),
          e(document.documentElement).on('keyup.tab', function (t) {
            9 === t.keyCode &&
              (e(document.documentElement).addClass('tab-outline'),
              e(document.documentElement).off('keyup.tab'));
          });
      }),
      (theme.setGlobals = function () {
        (theme.config.hasSessionStorage = theme.isSessionStorageSupported()),
          theme.config.isTouch && e('body').addClass('supports-touch'),
          enquire.register(theme.config.mediaQuerySmall, {
            match: function () {
              (theme.config.bpSmall = !0), e('body').trigger('matchSmall');
            },
            unmatch: function () {
              (theme.config.bpSmall = !1), e('body').trigger('unmatchSmall');
            },
          });
      }),
      (theme.loadImageSection = function (e) {
        function t() {
          e.removeClass('loading loading--delayed').addClass('loaded');
        }
        function i() {
          return e.find('.lazyloaded').length;
        }
        if (e.find('svg').length) return void t();
        if (i() > 0) return void t();
        var n = setInterval(function () {
          i() > 0 && (clearInterval(n), t());
        }, 80);
      }),
      (theme.isSessionStorageSupported = function () {
        if (window.self !== window.top) return !1;
        var e = 'test',
          t = window.sessionStorage;
        try {
          return t.setItem(e, '1'), t.removeItem(e), !0;
        } catch (e) {
          return !1;
        }
      }),
      (theme.isElementVisible = function (e, t) {
        var i = e[0].getBoundingClientRect(),
          n = window.innerHeight || document.documentElement.clientHeight;
        return (
          (t = t ? t : 0),
          i.bottom >= 0 &&
            i.right >= 0 &&
            i.top <= n + t &&
            i.left <=
              (window.innerWidth || document.documentElement.clientWidth)
        );
      }),
      (theme.pageTransitions = function () {
        1 == e('body').data('transitions') &&
          (navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) &&
            e('a').on('click', function () {
              window.setTimeout(function () {
                e('body').removeClass('unloading');
              }, 1200);
            }),
          e(
            'a[href^="mailto:"], a[href^="#"], a[target="_blank"], a[href*="youtube.com/watch"], a[href*="youtu.be/"]'
          ).each(function () {
            e(this).addClass('js-no-transition');
          }),
          e('a:not(.js-no-transition)').bind('click', function (t) {
            if (t.metaKey) return !0;
            t.preventDefault(), e('body').addClass('unloading');
            var i = e(this).attr('href');
            window.setTimeout(function () {
              location.href = i;
            }, 50);
          }),
          e('a.mobile-nav__link').bind('click', function () {
            theme.NavDrawer.close();
          }));
      }),
      (theme.reinitProductGridItem = function (e) {
        AOS && AOS.refreshHard(),
          theme.initQuickShop(!0),
          window.SPR && (SPR.initDomEls(), SPR.loadBadges()),
          sections.register('product-template', theme.Product, e),
          theme.collapsibles.init();
      }),
      (window.onpageshow = function (t) {
        t.persisted && e('body').removeClass('unloading');
      }),
      e(document).ready(function () {
        theme.init(),
          (window.sections = new theme.Sections()),
          sections.register('header-section', theme.HeaderSection),
          sections.register('slideshow-section', theme.SlideshowSection),
          sections.register('video-section', theme.VideoSection),
          sections.register('product', theme.Product),
          sections.register('product-recommendations', theme.Recommendations),
          sections.register('product-template', theme.Product),
          sections.register('collection-template', theme.Collection),
          sections.register(
            'featured-content-section',
            theme.FeaturedContentSection
          ),
          sections.register('collection-switcher', theme.CollectionSwitcher),
          sections.register('testimonials', theme.Testimonials),
          sections.register('newsletter-popup', theme.NewsletterPopup),
          sections.register('fading-images', theme.FadingImages),
          sections.register('background-image', theme.BackgroundImage),
          sections.register('map', theme.Maps),
          sections.register('blog', theme.Blog),
          sections.register('photoswipe', theme.Photoswipe),
          sections.register('footer-section', theme.FooterSection),
          document.dispatchEvent(new CustomEvent('page:loaded'));
      });
  })(theme.jQuery);
