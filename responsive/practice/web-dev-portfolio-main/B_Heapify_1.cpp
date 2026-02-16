#include <bits/stdc++.h>
// #include <ext/pb_ds/assoc_container.hpp>
// #include <ext/pb_ds/tree_policy.hpp>
using namespace std;
// using namespace __gnu_pbds;

#define int long long
#define gcd __gcd
#define ALL(x) (x).begin(), (x).end()
#define py cout << "YES\n";
#define pm cout << "-1\n";
#define pz cout << "0\n";
#define pn cout << "NO\n";
#define cheakmate return;

const int N = 1e5 + 5;
#define Mod 1000000009 + 7

void solve()
{
    int n;
    cin >> n;

    vector<int> a(n);
    map<int, int> mp, mp2;

    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        mp[a[i]] = i + 1;
    }

    for (int i = 0; i < n; i++)
    {

        int j = 2 * (i + 1);
        if (a[i] == i + 1)
        {
        }
        else
        {
            if (i == 0)
            {
                if (max(4 * (i + 1), a[i]) % min(4 * (i + 1), a[i]) != 0)
                {
                    pn cheakmate
                }
            }
            if (max(2 * (i + 1), a[i]) % min(2 * (i + 1), a[i]) != 0)
            {
                pn cheakmate
            }
        }
    }
    py
}

signed main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return 0;
}

/*===============================================
  :::::::::::::Author :Md.Mursalin:::::::::::::
  ===============================================*/
