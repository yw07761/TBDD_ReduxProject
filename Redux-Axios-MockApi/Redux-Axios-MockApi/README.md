# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.dev/c/expo-dev-tools/61) or [Discord](https://chat.expo.dev/).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack).







GIT COMMIT từng câu trên local

- git init 
- git add . 
- git commit -m "ghi chú"
- git log 
- q để out
- Tải gitkraken để xem commit


Data trên mockapi
[
  {
    "name": "Myra Zulauf",
    "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/334.jpg",
    "id": "1"
  },
]



// Step 3: Footer
  const Footer = () => (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
        <Text>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
// Css
footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#6053CC',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
