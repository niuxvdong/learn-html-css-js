// 1. 引用计数 reference counting (IE7及以下)

// 2. 标记-清除 Mark and Sweep (Chrome FF IE8及以上)

// 3. 机制
//      window对象作为root
//      从root出发，标记window下所有对象，如果对象中还包含对象，递归标记
//      将未标记的对象回收
