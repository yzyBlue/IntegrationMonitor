! function(e, a) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var n = a();
        for (var t in n)("object" == typeof exports ? exports : e)[t] = n[t]
    }
}(this, function() {
    return webpackJsonp([0], [function(e, a, n) {
        (function(e) {
            var a = n(1),
                t = n(2).Base64;
            n(7), n(8), n(9), n(10), a(function() {
                    var e = {
                            elmt: a(".account"),
                            open: function() {
                                this.elmt.find(".dropdown-main").slideDown(50), this.elmt.data("isOpen", !0), this.elmt.find(".account-info").addClass("active")
                            },
                            close: function() {
                                this.elmt.find(".dropdown-main").slideUp(50), this.elmt.data("isOpen", !1), this.elmt.find(".account-info").removeClass("active")
                            }
                        },
                        n = {
                            elmt: a(".order"),
                            open: function() {
                                this.elmt.find(".dropdown-main").slideDown(50), this.elmt.data("isOpen", !0), this.elmt.find(".order-title").addClass("active")
                            },
                            close: function() {
                                this.elmt.find(".dropdown-main").slideUp(50), this.elmt.data("isOpen", !1), this.elmt.find(".order-title").removeClass("active")
                            }
                        },
                        i = {
                            elmt: a(".lang"),
                            open: function() {
                                this.elmt.find(".dropdown-main").slideDown(50), this.elmt.data("isOpen", !0), this.elmt.find(".lang-info").addClass("active")
                            },
                            close: function() {
                                this.elmt.find(".dropdown-main").slideUp(50), this.elmt.data("isOpen", !1), this.elmt.find(".lang-info").removeClass("active")
                            }
                        };
                    a(".account").click(function() {
                        e.elmt.data("isOpen") ? e.close() : e.open()
                    }), a(".order").click(function() {
                        n.elmt.data("isOpen") ? n.close() : n.open()
                    }), a(".lang").click(function() {
                        i.elmt.data("isOpen") ? i.close() : i.open()
                    }), a(document).click(function(t) {
                        a(t.target).closest(".account").get(0) != e.elmt.get(0) && e.close(), a(t.target).closest(".order").get(0) != n.elmt.get(0) && n.close(), a(t.target).closest(".lang").get(0) != i.elmt.get(0) && i.close()
                    }), a(".btn-sidebar a").click(function() {
                        a(".sidebar").slideToggle()
                    }), a(".form-middle").length && a(".form-middle").height(a(".logo-center").height() + a(".container").height()), a(".lang").delegate(".dropdown-main a", "click", function(e) {
                        var n = a(e.currentTarget);
                        a.cookie("locale", n.data("lang"), {
                            domain: BlueWare.siteDomain,
                            path: "/",
                            expires: 365
                        }), window.location.href = window.location.href
                    }), a(".lang").length > 0 && (a.cookie("locale") || a.cookie("locale", "zh_CN", {
                        domain: BlueWare.siteDomain,
                        path: "/",
                        expires: 365
                    })), a(".remember-box label").on("click", function() {
                        a("#remember").attr("checked") ? (a("#remember").removeAttr("checked").val("false"), a(".check-in").hide()) : (a("#remember").attr("checked", "checked").val("true"), a(".check-in").show())
                    });
                    var l = a(".resend").click(function() {
                        a(this).is(".btn-disabled") || a.ajax({
                            url: "/pages/v2/signup/resendEmail",
                            dataType: "html"
                        }).done(function(e) {
                            1 == parseInt(e) && (l.removeClass("btn-blue").addClass("btn-disabled"), l.countdown("" + BlueWare.account.countdown.replace(/\{\w\}/g, "$time"), 60, function() {
                                l.removeClass("btn-disabled").addClass("btn-blue").text(BlueWare.account.resend)
                            }))
                        })
                    });
                    a("body").delegate("input.input-text", "focus", function() {
                        a(".field-error").remove()
                    }), a(".change-version a").click(function() {
                        a.cookie("matrix.version.V2", "new", {
                            path: "/",
                            expires: -1
                        })
                    }), a("#switchGroup").delegate("li", "click", function(e) {
                        var n = a(this).data("groupid");
                        a.ajax({
                            url: "/api/v2/changeGroup",
                            data: {
                                groupId: n
                            },
                            dataType: "json",
                            success: function(e) {
                                e.result && window.location.reload()
                            }
                        })
                    }), a("#loginform").validate({
                        errorPlacement: function(e, a) {
                            e.appendTo(a.siblings())
                        },
                        submitHandler: function(e) {
                            var n = a(e).find('[name="password"]'),
                                i = a(e).find('[name="encode"]');
                            if (i.length) try {
                                n.val(t.btoa(n.val())), i.val("true")
                            } catch (l) {}
                            return !0
                        },
                        rules: {
                            email: {
                                required: {
                                    depends: function() {
                                        return a(this).val(a.trim(a(this).val())), !0
                                    }
                                }
                            },
                            password: {
                                required: !0
                            }
                        },
                        messages: {
                            email: {
                                required: BlueWare.account.msg.email
                            },
                            password: {
                                required: BlueWare.account.msg.password
                            }
                        }
                    }), a("#signupform").validate({
                        submitHandler: function(e) {
                            var n = a(e).find('[name="password"]'),
                                i = a(e).find('[name="encode"]');
                            if (i.length) try {
                                n.val(t.btoa(n.val())), i.val("true")
                            } catch (l) {}
                            return !0
                        },
                        rules: {
                            email: {
                                required: {
                                    depends: function() {
                                        return a(this).val(a.trim(a(this).val())), !0
                                    }
                                },
                                email: !0,
                                maxlength: 60,
                                minlength: 1,
                                remote: {
                                    url: "/pages/v2/signup/check",
                                    data: {
                                        email: function() {
                                            return a('#signupform input[name="email"]').val() || "a"
                                        }
                                    }
                                }
                            },
                            name: {
                                required: !0,
                                maxlength: 10
                            },
                            password: {
                                required: !0,
                                minlength: 6,
                                maxlength: 15,
                                regexPassword: !0
                            },
                            telephone: {
                                required: !0,
                                telphoneValid: !0
                            }
                        },
                        messages: {
                            email: {
                                required: BlueWare.account.msg.email,
                                email: BlueWare.account.msg.validEmail,
                                maxlength: BlueWare.account.msg.maxlength,
                                minlength: BlueWare.account.msg.email,
                                remote: BlueWare.account.msg.regedEmail
                            },
                            name: {
                                required: BlueWare.account.msg.contactName,
                                maxlength: BlueWare.account.msg.maxlength
                            },
                            password: {
                                required: BlueWare.account.msg.password,
                                minlength: BlueWare.account.msg.minlength,
                                maxlength: BlueWare.account.msg.maxlength,
                                regexPassword: BlueWare.account.msg.regedPwd
                            },
                            telephone: {
                                required: BlueWare.account.msg.telephone,
                                telphoneValid: BlueWare.account.msg.validPhone
                            }
                        }
                    }), a("#completeform").validate({
                        rules: {
                            companyName: {
                                required: !0,
                                maxlength: 60
                            },
                            companySize: {
                                required: !0,
                                companySizeValid: !0
                            }
                        },
                        messages: {
                            companyName: {
                                required: BlueWare.account.msg.companyName,
                                maxlength: BlueWare.account.msg.maxlength
                            },
                            companySize: {
                                required: BlueWare.account.msg.companySize,
                                companySizeValid: BlueWare.account.msg.regedCompanySize
                            }
                        }
                    }), a("#forgetform").validate({
                        rules: {
                            email: {
                                required: {
                                    depends: function() {
                                        return a(this).val(a.trim(a(this).val())), !0
                                    }
                                },
                                email: !0,
                                maxlength: 60,
                                minlength: 1
                            }
                        },
                        messages: {
                            email: {
                                required: BlueWare.account.msg.email,
                                email: BlueWare.account.msg.validEmail,
                                maxlength: BlueWare.account.msg.maxlength,
                                minlength: BlueWare.account.msg.email
                            }
                        }
                    }), a("#resetform").validate({
                        submitHandler: function(e) {
                            var n = a(e).find('[name="password"]'),
                                i = a(e).find('[name="confirmed"]'),
                                l = a(e).find('[name="encode"]');
                            if (l.length) try {
                                n.val(t.btoa(n.val())), i.val(t.btoa(i.val())), l.val("true")
                            } catch (o) {}
                            return !0
                        },
                        rules: {
                            password: {
                                required: !0,
                                minlength: 6,
                                maxlength: 16,
                                regexPassword: !0
                            },
                            confirmed: {
                                required: !0,
                                equalTo: '#resetform input[name="password"]'
                            }
                        },
                        messages: {
                            password: {
                                required: BlueWare.account.msg.new_pwd,
                                minlength: BlueWare.account.msg.minlength,
                                maxlength: BlueWare.account.msg.maxlength,
                                regexPassword: BlueWare.account.msg.regedPwd
                            },
                            confirmed: {
                                required: BlueWare.account.msg.rewrite_pwd,
                                equalTo: BlueWare.account.msg.diffPwd
                            }
                        }
                    })
                }),
                function(e) {
                    e.fn.countdown = function(a, n, t) {
                        function i(e, n, t) {
                            0 >= n ? (e.text(""), t()) : (e.text(a.replace(l, n)), setTimeout(function() {
                                i(e, n - 1, t)
                            }, 1e3))
                        }
                        var l = /\$time/g;
                        return this.each(function() {
                            var a = e(this);
                            i(a, n, t)
                        })
                    }
                }(e)
        }).call(a, n(1))
    }])
});