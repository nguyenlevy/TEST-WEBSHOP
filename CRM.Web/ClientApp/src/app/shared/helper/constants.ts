export class CookieKey {
  public static readonly CurrentLanguage = 'current_language';
  public static readonly CurrentUser = 'current_user';
  public static readonly Token = 'token';
}

export class Constants {
  public static readonly Common = 'common';
  public static readonly Menu = 'menus';
  public static readonly Users = 'users';
  public static readonly Login = 'login';
  public static readonly Logout = 'logout';
  public static readonly Products = 'products';
  public static readonly Customers = 'customers';
  public static readonly Suppliers = 'suppliers';
  public static readonly ProductTypes = 'product_types';
  public static readonly ProductCategories = 'product_categories';
  public static readonly SubCategories = 'sub_categories';
  public static readonly ProductManufacturers = 'product_manufacturers';
  public static readonly TaxCategories = 'tax_categories';
  public static readonly ProductStatuses = 'product_statuses';
  public static readonly DownLoadFileName = 'export';
  public static readonly Orders = 'orders';
  public static readonly Warehousings = 'warehousings';
  public static readonly Carriers = 'carriers';
  public static readonly Stores = 'stores';
  public static readonly Employees = 'employees';
  public static readonly Inventories = 'inventories';
  public static readonly Turnovers = 'turnovers';
  public static readonly Profits = 'profits';
  public static readonly Costs = 'costs';
  public static readonly CostTypes = 'cost_types';
  public static readonly ReceiptsAndExpenses = 'balances';
  public static readonly Overview = 'overview';
  public static readonly PaymentMethods = 'payment_methods';
  public static readonly BalanceCategories = 'balance_categories';
  public static readonly Overviews = 'overviews';
}

export class Configuration {
  public static readonly defaultPageSize = 10;
  public static readonly optionPageSizes = [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '25', value: 25 },
    { label: '50', value: 50 },
    { label: '100', value: 100 }
  ];

  public static readonly NotificationType = {
    Success: 'success',
    Error: 'error',
    Warning: 'warning'
  };
}
