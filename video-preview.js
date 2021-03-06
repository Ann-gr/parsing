const fs = require("fs");
const path = require("path");

const videos = [
  {
    videoId: "_W68jpJ7Xb4",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/_W68jpJ7Xb4/mqdefault_6s.webp?du=3000&sqp=CIKBho4G&rs=AOn4CLBSSfBSfNCxwdXBlC1rd29Wghn0-w",
  },
  {
    videoId: "siNk2Ntdb70",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/siNk2Ntdb70/mqdefault_6s.webp?du=3000&sqp=CJnyhY4G&rs=AOn4CLDyvwCxWE_4N71MxrCJ8kuwFa12wg",
  },
  {
    videoId: "GaoPZBL_fQw",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/GaoPZBL_fQw/mqdefault_6s.webp?du=3000&sqp=CMDyhY4G&rs=AOn4CLDTtoaswwlFlPLSUNf9dnV0KUSaZA",
  },
  {
    videoId: "v3XyOjqZDaU",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/v3XyOjqZDaU/mqdefault_6s.webp?du=3000&sqp=CJvdhY4G&rs=AOn4CLBwfrwaj0spljtq7EtA_1OKzErifA",
  },
  {
    videoId: "GUYBBTv-2lY",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/GUYBBTv-2lY/mqdefault_6s.webp?du=3000&sqp=CIyEho4G&rs=AOn4CLCsJYB5WvcZQfzhST6OuXZNeQVWdA",
  },
  {
    videoId: "Yi9oBMLUsh8",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/Yi9oBMLUsh8/mqdefault_6s.webp?du=3000&sqp=CLP8hY4G&rs=AOn4CLCPzwCwtUP48RpkzoQV1Rr1eoTiCQ",
  },
  {
    videoId: "MzvYrmoDq5s",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/MzvYrmoDq5s/mqdefault_6s.webp?du=3000&sqp=COzghY4G&rs=AOn4CLDCQVYzirb9GYdEiBUtYzaCTnPO8g",
  },
  {
    videoId: "uCQpnPm7vd4",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/uCQpnPm7vd4/mqdefault_6s.webp?du=3000&sqp=CKbihY4G&rs=AOn4CLDdUv8tuom-xKRAQ1qCkthiUswDng",
  },
  {
    videoId: "t-mx9oS-4DU",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/t-mx9oS-4DU/mqdefault_6s.webp?du=3000&sqp=CP3dhY4G&rs=AOn4CLBLxNJVWplzLP7-lRvVxy-leb2K5A",
  },
  {
    videoId: "1vTtIKETE-E",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/1vTtIKETE-E/mqdefault_6s.webp?du=3000&sqp=CMD_hY4G&rs=AOn4CLD5Ov6KYT2QUzwOqbB6cXEej2WtfA",
  },
  {
    videoId: "yOGAZH0VGho",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/yOGAZH0VGho/mqdefault_6s.webp?du=3000&sqp=CKTLhY4G&rs=AOn4CLA1ivV87JUl4RdH4LWBDNRC3Iyj6Q",
  },
  {
    videoId: "QjsEkUbe4Es",
  },
  {
    videoId: "F0KyeNQSneA",
  },
  {
    videoId: "UQHQZvkoGOo",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/UQHQZvkoGOo/mqdefault_6s.webp?du=3000&sqp=CPL1hY4G&rs=AOn4CLBp86drcXWbW4_CwIWdDDFx08HAhA",
  },
  {
    videoId: "roaPvSS1WHM",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/roaPvSS1WHM/mqdefault_6s.webp?du=3000&sqp=COPjhY4G&rs=AOn4CLBrKSxHYDiKDJzYSqs9Zw4WpFtYKw",
  },
  {
    videoId: "Lq_u0beSzpo",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/Lq_u0beSzpo/mqdefault_6s.webp?du=3000&sqp=CNrWhY4G&rs=AOn4CLAwLGuoL_g2jBcF8VOcok_9yim9Hw",
  },
  {
    videoId: "V2VeQHmfvOo",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/V2VeQHmfvOo/mqdefault_6s.webp?du=3000&sqp=CMzkhY4G&rs=AOn4CLD_z2pNbnu0qthwEiO_4V1s9g0avg",
  },
  {
    videoId: "z30UB9YH1Ig",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/z30UB9YH1Ig/mqdefault_6s.webp?du=3000&sqp=CPD7hY4G&rs=AOn4CLBHuMIA2XusE0YM8S8AR_jP3rMcEg",
  },
  {
    videoId: "AV6aCSEw-h0",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/AV6aCSEw-h0/mqdefault_6s.webp?du=3000&sqp=CI_1hY4G&rs=AOn4CLB-1JpobvmZF0rfklYMAk-QVjJefA",
  },
  {
    videoId: "uoBYAKStfp8",
  },
  {
    videoId: "vFkUPTwCMmg",
  },
  {
    videoId: "k7kZ6zlQpgA",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/k7kZ6zlQpgA/mqdefault_6s.webp?du=3000&sqp=CKDrhY4G&rs=AOn4CLDgBFvMd5LKpL-AHMDdY8mk0BJyJQ",
  },
  {
    videoId: "Ftm_bRaf9wY",
  },
  {
    videoId: "kB1dlBxpB_Y",
  },
  {
    videoId: "h-YyovCjOAw",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/h-YyovCjOAw/mqdefault_6s.webp?du=3000&sqp=CPzohY4G&rs=AOn4CLBrjRC9mPk_v3pUVw42L92J0un_dQ",
  },
  {
    videoId: "MIYs88NqaSI",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/MIYs88NqaSI/mqdefault_6s.webp?du=3000&sqp=CM7qhY4G&rs=AOn4CLDGX7heRw7_8nIB1UrGG5EHskGUjA",
  },
  {
    videoId: "bLHSndwEbI4",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/bLHSndwEbI4/mqdefault_6s.webp?du=3000&sqp=CI6Eho4G&rs=AOn4CLCkzGkAXxSOg3hrIoCso6hcfBfTuA",
  },
  {
    videoId: "Vbe-C5ufaRo",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/Vbe-C5ufaRo/mqdefault_6s.webp?du=3000&sqp=CMjvhY4G&rs=AOn4CLAIglmWmjumI71byYu9ysIr20O7tQ",
  },
  {
    videoId: "PC3lSrRrYMI",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/PC3lSrRrYMI/mqdefault_6s.webp?du=3000&sqp=CJr9hY4G&rs=AOn4CLCWH2dg7__PD1ewbPFadwpCPMhEmw",
  },
  {
    videoId: "k-Yzqan636k",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/k-Yzqan636k/mqdefault_6s.webp?du=3000&sqp=CN3-hY4G&rs=AOn4CLCbNcQ_p_ajxBoSWiv8YA79Xz-PZA",
  },
  {
    videoId: "glGBaTFziH4",
  },
  {
    videoId: "nMlbF-0J428",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/nMlbF-0J428/mqdefault_6s.webp?du=3000&sqp=COfshY4G&rs=AOn4CLBhP-nav3n9LrJOvjBgEv5VwzRfYA",
  },
  {
    videoId: "V4rUjFM3GvQ",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/V4rUjFM3GvQ/mqdefault_6s.webp?du=3000&sqp=CMiEho4G&rs=AOn4CLDCg6MC2a2iCEE3wuDY2pApwJs7Wg",
  },
  {
    videoId: "cxK6AfNJtQ4",
  },
  {
    videoId: "uo8MnBtfAB8",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/uo8MnBtfAB8/mqdefault_6s.webp?du=3000&sqp=CJrThY4G&rs=AOn4CLDidX4NxH32bcgmfwabX9Fr79yLzw",
  },
  {
    videoId: "pXrhmfMudWQ",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/pXrhmfMudWQ/mqdefault_6s.webp?du=3000&sqp=CNDwhY4G&rs=AOn4CLBf-2gXuB_3W1nHAUR1cRnTnW0wcg",
  },
  {
    videoId: "IUzlYuJKgao",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/IUzlYuJKgao/mqdefault_6s.webp?du=3000&sqp=CPDthY4G&rs=AOn4CLB6MDizQ2_G0S9aB8qila0BOE40TQ",
  },
  {
    videoId: "QoVnKllyhX8",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/QoVnKllyhX8/mqdefault_6s.webp?du=3000&sqp=CPG7hY4G&rs=AOn4CLCx_ZE7M4xtd9Hiu3dJDxhIbZ3j_Q",
  },
  {
    videoId: "5OwtU6hti2s",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/5OwtU6hti2s/mqdefault_6s.webp?du=3000&sqp=CNX2hY4G&rs=AOn4CLA187nKTG14BhC6cuDTIXBbQy9dFg",
  },
  {
    videoId: "cfhFkaATen0",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/cfhFkaATen0/mqdefault_6s.webp?du=3000&sqp=CImGho4G&rs=AOn4CLC8IOHTDDADB-qhiOf72vnDKB9JWA",
  },
  {
    videoId: "LIXx2EdlzYw",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/LIXx2EdlzYw/mqdefault_6s.webp?du=3000&sqp=COj5hY4G&rs=AOn4CLDpJuzvY2Va-Zetu-4gxIo_QMVyWA",
  },
  {
    videoId: "_RTYx2-IirE",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/_RTYx2-IirE/mqdefault_6s.webp?du=3000&sqp=COfohY4G&rs=AOn4CLDwLQ1ucFKyXIcVX5ZvMzlUYYhO2g",
  },
  {
    videoId: "czm6N4113dM",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/czm6N4113dM/mqdefault_6s.webp?du=3000&sqp=CMKEho4G&rs=AOn4CLAtVYR0JVCotGT5IFTPxrqJONWnaA",
  },
  {
    videoId: "QhXrQIgsZb0",
  },
  {
    videoId: "btPPhkx9rYI",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/btPPhkx9rYI/mqdefault_6s.webp?du=3000&sqp=CNjwhY4G&rs=AOn4CLDp_waLCsnfRgJUa7tYqqmJlnyTMA",
  },
  {
    videoId: "LG6MdlV9jsw",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/LG6MdlV9jsw/mqdefault_6s.webp?du=3000&sqp=CNTEhY4G&rs=AOn4CLBzsYgpFeiPNyrO0dCDNOrC8nfUVQ",
  },
  {
    videoId: "lJegA6AxeRU",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/lJegA6AxeRU/mqdefault_6s.webp?du=3000&sqp=CIP5hY4G&rs=AOn4CLA8cV6cqYoQPzl8-nAh8sSIZWym0A",
  },
  {
    videoId: "5jopy_2UhzU",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/5jopy_2UhzU/mqdefault_6s.webp?du=3000&sqp=CLrYhY4G&rs=AOn4CLD-mTs_TOECk41zVvHlUPo0CS2Qiw",
  },
  {
    videoId: "vlULiIGESl4",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/vlULiIGESl4/mqdefault_6s.webp?du=3000&sqp=CI6Eho4G&rs=AOn4CLDZtMxyJbdiRoxrFE-dEvDeUsOtXQ",
  },
  {
    videoId: "B0mrpbV5Hk8",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/B0mrpbV5Hk8/mqdefault_6s.webp?du=3000&sqp=CJnrhY4G&rs=AOn4CLDAFkcPSLlAS8_3WrHHx6FrtpvZAA",
  },
  {
    videoId: "u2FkXS0gqNc",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/u2FkXS0gqNc/mqdefault_6s.webp?du=3000&sqp=CIXchY4G&rs=AOn4CLC7_RhmyzMaUcX8UDLEiYm-HaGRbg",
  },
  {
    videoId: "dcQVuQnlGps",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/dcQVuQnlGps/mqdefault_6s.webp?du=3000&sqp=CJDahY4G&rs=AOn4CLDb1k2JbWy7Kru7veCP1IhcGR_8mQ",
  },
  {
    videoId: "8CQjaj-hgDo",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/8CQjaj-hgDo/mqdefault_6s.webp?du=3000&sqp=CObshY4G&rs=AOn4CLB9GXxxQaqAzVaBmvINHREPT6tQjQ",
  },
  {
    videoId: "RssoXubTGt4",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/RssoXubTGt4/mqdefault_6s.webp?du=3000&sqp=CMTshY4G&rs=AOn4CLD88ZgXPQ1DM_Y6H9CtzfEKW154VA",
  },
  {
    videoId: "dAE0SdEWb7I",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/dAE0SdEWb7I/mqdefault_6s.webp?du=3000&sqp=CLzshY4G&rs=AOn4CLA2teZS9Zg9UfOatOz6aSeIg-QsWw",
  },
  {
    videoId: "fPTuwhnj3CE",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/fPTuwhnj3CE/mqdefault_6s.webp?du=3000&sqp=CJ3ohY4G&rs=AOn4CLAJac12R1kWsm2MBKQG1g7tYkFTUw",
  },
  {
    videoId: "mx4xHvmNN8w",
  },
  {
    videoId: "x5O-0S6KLuc",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/x5O-0S6KLuc/mqdefault_6s.webp?du=3000&sqp=COyFho4G&rs=AOn4CLCWqVVcUxtr6mqQhChYe24s2jJJoA",
  },
  {
    videoId: "Bm6f24uUxbE",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/Bm6f24uUxbE/mqdefault_6s.webp?du=3000&sqp=CPTfhY4G&rs=AOn4CLDiSWRCZkalp_a4Ul2y4AZvYCfq9g",
  },
  {
    videoId: "YqHT6la5PQU",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/YqHT6la5PQU/mqdefault_6s.webp?du=3000&sqp=CPTPhY4G&rs=AOn4CLBS-_XGvGNK2rCxTKjizKHjKm9I1Q",
  },
  {
    videoId: "i_wEtmbj9Ig",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/i_wEtmbj9Ig/mqdefault_6s.webp?du=3000&sqp=CJCBho4G&rs=AOn4CLBY7lSjKaiBdefXCh5KPiocoJzVJQ",
  },
  {
    videoId: "GxYOrprJcMI",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/GxYOrprJcMI/mqdefault_6s.webp?du=3000&sqp=CJzbhY4G&rs=AOn4CLDArvVPU0wawqtAzidfXdL0-NZ79A",
  },
  {
    videoId: "GqH7650W5ZQ",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/GqH7650W5ZQ/mqdefault_6s.webp?du=3000&sqp=CJzqhY4G&rs=AOn4CLAq6NiaSyvYGECisH60LGGsDNLEpw",
  },
  {
    videoId: "GmqDl5fSmYU",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/GmqDl5fSmYU/mqdefault_6s.webp?du=3000&sqp=COXuhY4G&rs=AOn4CLAGBelPSKlhxKEAItxif6CbLuvRhQ",
  },
  {
    videoId: "zh4dIZtzJns",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/zh4dIZtzJns/mqdefault_6s.webp?du=3000&sqp=CM3xhY4G&rs=AOn4CLBPZwJNVxpsN0EPgdfkM6NKplJb1Q",
  },
  {
    videoId: "0qKTlbb9cSE",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/0qKTlbb9cSE/mqdefault_6s.webp?du=3000&sqp=CO_4hY4G&rs=AOn4CLDhbRU7fFXT7nknAudAwBugsDgQMw",
  },
  {
    videoId: "OLbhFE5JxuQ",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/OLbhFE5JxuQ/mqdefault_6s.webp?du=3000&sqp=CMzihY4G&rs=AOn4CLCwDbxxgna2Gx15Oc8BG-Gg5VT6Mg",
  },
  {
    videoId: "f4snQTVBaOE",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/f4snQTVBaOE/mqdefault_6s.webp?du=3000&sqp=CIHqhY4G&rs=AOn4CLCdWbZ5fyL-h8cppAS4mi-_1QgEKQ",
  },
  {
    videoId: "6WVAfRUFm7k",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/6WVAfRUFm7k/mqdefault_6s.webp?du=3000&sqp=CKjkhY4G&rs=AOn4CLCo1l7u0BwlvyzahYrgXLY-jTGQTw",
  },
  {
    videoId: "jfFEgt-k6Lk",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/jfFEgt-k6Lk/mqdefault_6s.webp?du=3000&sqp=CP_chY4G&rs=AOn4CLAxbCX2pp69eoNAgDmMtl3av-iV1Q",
  },
  {
    videoId: "QyulCggMlc8",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/QyulCggMlc8/mqdefault_6s.webp?du=3000&sqp=COLOhY4G&rs=AOn4CLAxVeDdGow97XfbkVJEBHDv8osi4A",
  },
  {
    videoId: "br2ojEg8u44",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/br2ojEg8u44/mqdefault_6s.webp?du=3000&sqp=CJrchY4G&rs=AOn4CLDaJkIPZ7OP9hq01-LuwinUjgjhyg",
  },
  {
    videoId: "u2Y0oaH0-g4",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/u2Y0oaH0-g4/mqdefault_6s.webp?du=3000&sqp=CITkhY4G&rs=AOn4CLADZAwHb23nzylHFlFlMvr0kQtpCw",
  },
  {
    videoId: "cZh-C4M5Xvg",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/cZh-C4M5Xvg/mqdefault_6s.webp?du=3000&sqp=CMD9hY4G&rs=AOn4CLC58DaJ3VshNm4sozM_rcb8Za1tiQ",
  },
  {
    videoId: "3SUFiQ_Njv8",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/3SUFiQ_Njv8/mqdefault_6s.webp?du=3000&sqp=CKSAho4G&rs=AOn4CLBflvWCFmve7mFLe2z7KJX3paS2lQ",
  },
  {
    videoId: "CxdqS1jkTrw",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/CxdqS1jkTrw/mqdefault_6s.webp?du=3000&sqp=CJzYhY4G&rs=AOn4CLCIxzZ0jSGgtsVKkOUPjJUQrpPFWA",
  },
  {
    videoId: "UPuUCsZFR1w",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/UPuUCsZFR1w/mqdefault_6s.webp?du=3000&sqp=COzvhY4G&rs=AOn4CLD5_mMf41T3gG6xRAgMz6gN_4URQw",
  },
  {
    videoId: "ExNm7QqwDPg",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/ExNm7QqwDPg/mqdefault_6s.webp?du=3000&sqp=CMj0hY4G&rs=AOn4CLDnrcYvCbFK0G8dPhVNkYWo0uGw-g",
  },
  {
    videoId: "CM_RnOh8pDQ",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/CM_RnOh8pDQ/mqdefault_6s.webp?du=3000&sqp=CNTghY4G&rs=AOn4CLD18BAJVihqUPnnBdiuXg9lDJsggw",
  },
  {
    videoId: "kJFVqTgmTL0",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/kJFVqTgmTL0/mqdefault_6s.webp?du=3000&sqp=CL_chY4G&rs=AOn4CLBgTCAEEk_qeBKYYvLLZQqKuNNQIw",
  },
  {
    videoId: "AbloySsrEqk",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/AbloySsrEqk/mqdefault_6s.webp?du=3000&sqp=COv0hY4G&rs=AOn4CLB2BhOdGx41bczDZinvuosHgz9CAg",
  },
  {
    videoId: "WKtgi3ZNpyw",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/WKtgi3ZNpyw/mqdefault_6s.webp?du=3000&sqp=CKzjhY4G&rs=AOn4CLB3MCC9pTPA7CzoT7aj6oo52TaC6A",
  },
  {
    videoId: "K51zJHfuQiI",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/K51zJHfuQiI/mqdefault_6s.webp?du=3000&sqp=CJrChY4G&rs=AOn4CLC7pouYB61BzF8aHWlCaVDl75Uvuw",
  },
  {
    videoId: "-3ycN3rEf6M",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/-3ycN3rEf6M/mqdefault_6s.webp?du=3000&sqp=CKjxhY4G&rs=AOn4CLA-gQ-Trgn8DWgbcJ3y4dBQVLHAEg",
  },
  {
    videoId: "FDZ11B7vTEY",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/FDZ11B7vTEY/mqdefault_6s.webp?du=3000&sqp=CLbehY4G&rs=AOn4CLCJI-C5Nx_XC1SNPj2Jaxv1xbDl6Q",
  },
  {
    videoId: "nusAsozocY0",
  },
  {
    videoId: "29cYTwT3Mvw",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/29cYTwT3Mvw/mqdefault_6s.webp?du=3000&sqp=CMD0hY4G&rs=AOn4CLBi6_qNNaSBlCNFw0egF-3aT9z7fg",
  },
  {
    videoId: "swBJ6sYd2c8",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/swBJ6sYd2c8/mqdefault_6s.webp?du=3000&sqp=CKDnhY4G&rs=AOn4CLCuUNznc72CiTi0a7MNSFo_JneAAg",
  },
  {
    videoId: "UQ8vk3YCXkA",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/UQ8vk3YCXkA/mqdefault_6s.webp?du=3000&sqp=CMC_hY4G&rs=AOn4CLDzPu2ysjObqXjPfiwZvGZHlP1hfQ",
  },
  {
    videoId: "LtpA19gWedw",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/LtpA19gWedw/mqdefault_6s.webp?du=3000&sqp=COSEho4G&rs=AOn4CLBj32LwDElScv6YOSEBVzgPSom2LQ",
  },
  {
    videoId: "uU39b7jwjLA",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/uU39b7jwjLA/mqdefault_6s.webp?du=3000&sqp=CODjhY4G&rs=AOn4CLBNwfYG7IqghqZw7sU0PsQkESSmyw",
  },
  {
    videoId: "uCQ1JLm7fSM",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/uCQ1JLm7fSM/mqdefault_6s.webp?du=3000&sqp=COXuhY4G&rs=AOn4CLAUGy3EuXndRpoARGw-GH30XnodLA",
  },
  {
    videoId: "0FLA4A8Z5BU",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/0FLA4A8Z5BU/mqdefault_6s.webp?du=3000&sqp=COX9hY4G&rs=AOn4CLAE5-jJ2615zxXlPq5zFNeKJeiW8w",
  },
  {
    videoId: "EuomVI1xNW4",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/EuomVI1xNW4/mqdefault_6s.webp?du=3000&sqp=CNb3hY4G&rs=AOn4CLDmpIGo867uGjwBdwrSYyzE_4bxTA",
  },
  {
    videoId: "4PiAXCiti1E",
  },
  {
    videoId: "Ao9gI81V8uA",
  },
  {
    videoId: "Dut2f8xWYsU",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/Dut2f8xWYsU/mqdefault_6s.webp?du=3000&sqp=CPGAho4G&rs=AOn4CLD-MpzWVwUBhTKDPtRxO4MbaYMaJQ",
  },
  {
    videoId: "_fuH1_4DgBA",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/_fuH1_4DgBA/mqdefault_6s.webp?du=3000&sqp=CPD7hY4G&rs=AOn4CLBll0aRZrdXl21Q9Mgmo_Ec0DbpTg",
  },
  {
    videoId: "xGGLvKEzfT8",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/xGGLvKEzfT8/mqdefault_6s.webp?du=3000&sqp=CKf-hY4G&rs=AOn4CLCReGWyo87WEG8BD65fMWyTatHNdA",
  },
  {
    videoId: "gooxmCZrtBQ",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/gooxmCZrtBQ/mqdefault_6s.webp?du=3000&sqp=CJzqhY4G&rs=AOn4CLA7BNaHNPDsEqzBqZqqa7KPSssNzQ",
  },
  {
    videoId: "TG4SHEgu8Fo",
  },
  {
    videoId: "tirTL1m_7Xo",
  },
  {
    videoId: "hz0lVRVXU3U",
  },
  {
    videoId: "UwH8bw3XViw",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/UwH8bw3XViw/mqdefault_6s.webp?du=3000&sqp=CMD0hY4G&rs=AOn4CLC1lRaeDjf-0FHfC3qjdFQqMdn55A",
  },
  {
    videoId: "OFVrFyBi8fQ",
  },
  {
    videoId: "XGJqUHYfYTk",
  },
  {
    videoId: "CfMNKOhVZP4",
  },
  {
    videoId: "3l8equA_znc",
  },
  {
    videoId: "rtP7Dz1QK3U",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/rtP7Dz1QK3U/mqdefault_6s.webp?du=3000&sqp=CK3UhY4G&rs=AOn4CLD4kJ-LQPSzPavEsecRQ78ynp7kvQ",
  },
  {
    videoId: "jdvKBTvLTRo",
  },
  {
    videoId: "OfCKYwm7XWE",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/OfCKYwm7XWE/mqdefault_6s.webp?du=3000&sqp=CMDehY4G&rs=AOn4CLCEl6DKoPPk1ZrlfbNeS-No1xY3Vw",
  },
  {
    videoId: "dr4MZeXiU0E",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/dr4MZeXiU0E/mqdefault_6s.webp?du=3000&sqp=CPr8hY4G&rs=AOn4CLDVJVGXrHeIJIkzKiV4E7aEz_V2Kg",
  },
  {
    videoId: "SSL9JmD9axE",
  },
  {
    videoId: "K72S8a78iiY",
    thumbnailUrl:
      "https://i.ytimg.com/an_webp/K72S8a78iiY/mqdefault_6s.webp?du=3000&sqp=CMTmhY4G&rs=AOn4CLA4aJGnN-c3oXGUKw26JOjdFfJuDQ",
  },
  {
    videoId: "jTns6rAGHaU",
  },
  {
    videoId: "RXCE8AvMRMw",
  },
  {
    videoId: "-0iMw6c0nUc",
  },
  {
    videoId: "x_il3K4GjB8",
  },
  {
    videoId: "dy-es89CEFI",
  },
  {
    videoId: "PCxfb2yAQfg",
  },
  {
    videoId: "xrey6nb3oaQ",
  },
  {
    videoId: "mZprCeaAgKs",
  },
];

const filteredVideos = videos.filter((video) => {
  return !!video.thumbnailUrl
  // if (video.thumbnailUrl) {
  //     return true;
  // } else {
  //   return false;
  // }
})

const videoObj = {};

for (let video of filteredVideos) {
    videoObj[video.videoId] = video.thumbnailUrl;
}

// [{
//   "videoId": "_W68jpJ7Xb4",
//   "thumbnailUrl": "https://i.ytimg.com/an_webp/_W68jpJ7Xb4/mqdefault_6s.webp?du=3000&sqp=CIKBho4G&rs=AOn4CLBSSfBSfNCxwdXBlC1rd29Wghn0-w"
// },]

// {
//   "_W68jpJ7Xb4": "https://i.ytimg.com/an_webp/_W68jpJ7Xb4/mqdefault_6s.webp?du=3000&sqp=CIKBho4G&rs=AOn4CLBSSfBSfNCxwdXBlC1rd29Wghn0-w"
// }

// console.log(filteredVideos);
// fs.writeFileSync(path.join(__dirname, "./filtered-videos.json"), JSON.stringify(filteredVideos, null, 2))
console.log(videoObj);
fs.writeFileSync(path.join(__dirname, "./video-obj.json"), JSON.stringify(videoObj, null, 2))