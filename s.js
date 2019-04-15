require("UIColor");

defineClass("LoginViewController", {
    viewDidLoad: function() {
        self.super().viewDidLoad();
        self.initData();
        self.initSubviews();
        self.initLayout();
        self.view().setBackgroundColor(UIColor.redColor());
    }
}, {});
