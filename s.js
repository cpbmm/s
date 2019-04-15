require("UIColor");

defineClass("LoginViewController", {
    viewDidLoad: function() {
        self.super().viewDidLoad();
        self.initData();
        self.initSubviews();
        self.initLayout();
        self.navigationItem().setTitle("测试js");
    }
}, {});
