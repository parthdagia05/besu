window.BENCHMARK_DATA = {
  "lastUpdate": 1782637047110,
  "repoUrl": "https://github.com/parthdagia05/besu",
  "entries": {
    "Besu EVM JMH Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "5d8ea2078737cb378345e9aac612afd5586e048c",
          "message": "Drop V2 suffix from shift-op regex for symmetric v1/v2 comparison\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-10T14:14:25Z",
          "url": "https://github.com/parthdagia05/besu/commit/5d8ea2078737cb378345e9aac612afd5586e048c"
        },
        "date": 1778423421206,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 90.58928114729122,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.14622350965571,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 78.99238450376718,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 17.725489977137073,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 71.36304731849236,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.012773651796087,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 68.44871363595266,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.25256206863467,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "219423e0e124c1faa4412438e40d3301ef18ac5b",
          "message": "Run Add/Sar/Shl/Shr v1-vs-v2 benchmarks\n\nExpands the JMH includes regex to cover the four EVM operations that\nhave both a v1 and a v2 implementation: ADD plus the three shift ops\n(SAR, SHL, SHR). With both versions included for each, every dashboard\ndata point is a direct v1-vs-v2 comparison.\n\n-Pcases pins ADD_RANDOM_RANDOM and FULL_RANDOM so each benchmark runs\none representative scenario per op and the whole job stays within the\n~12 min hosted-runner budget.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-11T14:41:09Z",
          "url": "https://github.com/parthdagia05/besu/commit/219423e0e124c1faa4412438e40d3301ef18ac5b"
        },
        "date": 1778518745461,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 94.06814869098561,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 90.08034039778758,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 88.52967933637164,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 88.43665945285044,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 95.84639263348947,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 128.09880703799803,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 99.27725013390284,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 70.90433390605774,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 34.84828192629297,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 25.091136542546327,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 22.75847575104407,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 85.35517772241879,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 50.47731172693189,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 89.20922306366572,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 70.19405548292715,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 35.79864744661855,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.265182503667607,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.063486534934313,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 73.31000602296785,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 66.71529700296429,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 88.66504863456663,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 64.89032433759087,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 35.85355493057903,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.145414550927498,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.29441109022153,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 71.47390750701003,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.545967206665528,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 6.898243458913268,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 9.660681789427816,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 9.569279320344823,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 9.005285027597797,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 7.87316990456509,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 8.245933031318993,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 7.759210609989465,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 7.629210995276296,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.89917406239924,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 7.991513253834415,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 17.137381039342745,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.035334034305244,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 9.675545346777971,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 7.72215663407957,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 7.870127014244363,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 8.438721463817188,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.482911352390385,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.42643095368416,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 6.968675541359474,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 9.075927571741772,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 7.6187228964656075,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 7.691059867197339,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 8.462594770263198,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.500787241715287,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 8.870852641665698,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "219423e0e124c1faa4412438e40d3301ef18ac5b",
          "message": "Run Add/Sar/Shl/Shr v1-vs-v2 benchmarks\n\nExpands the JMH includes regex to cover the four EVM operations that\nhave both a v1 and a v2 implementation: ADD plus the three shift ops\n(SAR, SHL, SHR). With both versions included for each, every dashboard\ndata point is a direct v1-vs-v2 comparison.\n\n-Pcases pins ADD_RANDOM_RANDOM and FULL_RANDOM so each benchmark runs\none representative scenario per op and the whole job stays within the\n~12 min hosted-runner budget.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-11T14:41:09Z",
          "url": "https://github.com/parthdagia05/besu/commit/219423e0e124c1faa4412438e40d3301ef18ac5b"
        },
        "date": 1778519457374,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 74.28376556799324,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 75.39245717052135,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 82.46923674870632,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 81.48791408501643,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 68.96361752512054,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 115.8524428606094,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 89.57544744212733,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 66.86217998180803,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 33.93624720331963,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 28.608599121627048,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 24.53502732101851,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 61.61638602962296,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 43.651826678709654,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 70.37579004917457,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 58.03940296040109,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 33.49275346716493,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.6139707666743,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.355886213421194,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 53.576729269295626,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 54.329005628185065,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 68.38642838912111,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 66.09136645251412,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 34.13112011596458,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.71740982057732,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.27701484109021,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.06120268949801,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 15.790603848723839,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.288692546290538,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 8.835108567368534,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 8.650314023716938,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 8.711332537655327,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 8.032730804998684,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 8.196268314679788,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 8.011645951573607,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 7.989436330749316,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.8980618026505045,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.413458691748685,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 21.15812672581628,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.159579966170297,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 8.883034663408507,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 7.922256476522435,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 7.886212209250149,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.6179510105646004,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 7.965058361436954,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.825751927971515,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.145519885516305,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 8.823604928095687,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 8.020492547363803,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 7.9411517692922216,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.5329715313051695,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 7.950947331151968,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.675000238623436,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "b50ba985c50e6755196edbd5c8afb687e5c8a2a1",
          "message": "Document benchmark addition and PR comment in benchmarks README\n\nUpdates docs/benchmarks/README.md to reflect what the pipeline now\ncovers: JMH on eight EVM operations with v2 ports, evmtool benchmark\non two precompiles, nightly schedule, label-gated PR runs, and a\nmarkdown delta comment driven by scripts/diff_jmh.py.\n\nAdds two sections aimed at future contributors:\n- \"How the PR comment works\" — what triggers it, what the columns mean,\n  and the Improvements / Stable Only / Newly slow classification rule\n  inherited from PR #9775.\n- \"How to add a new benchmark\" — concrete steps for JMH opcodes and\n  for evmtool precompiles, including the case-sensitivity gotcha on\n  precompile subcommand names.\n\nRemoves the items that are no longer out of scope (PR-time comments,\nmore than one benchmark) and adds the ones that still are\n(self-hosted runner, statistical tests, cross-client).\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-21T04:40:59Z",
          "url": "https://github.com/parthdagia05/besu/commit/b50ba985c50e6755196edbd5c8afb687e5c8a2a1"
        },
        "date": 1779339786977,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 97.67929837918305,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 108.45141759735316,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 115.15440793360378,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 188.12389396427676,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 91.94327847955705,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 92.09909804919745,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 91.00480004994581,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 103.26738603846825,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 137.16806628357222,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 96.21532641615542,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 77.02785934423359,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 36.93766579544276,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 26.34463237985147,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 23.13507742340215,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 84.66043644251798,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 52.55893817407373,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 93.16841524183967,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 74.48217339866608,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 37.654271740293,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 20.503599772296134,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.99209183011022,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 77.42200409587443,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 66.75361159439638,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 97.887379501811,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 77.80483371692708,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 37.320793998975816,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 20.532610462783786,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 18.00402569093639,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 74.86973046383798,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 153.12471224510972,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 11.168454519103625,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 69.81576935200582,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 73.1484230227104,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 60.50599305968742,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.6472727877446065,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 10.293774421673044,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 10.461720054509817,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 10.00345454139791,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 8.446604513070689,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 9.036449210877512,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 8.454458162518517,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 8.473953621162865,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 8.500257140404718,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.55376793695093,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.609657322879785,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.456329502294954,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 10.655939592036722,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 8.627491321611855,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 8.459757344631146,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 9.065466596724207,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 9.109965118282474,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.71966356109156,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.395667684795112,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 9.91301070408359,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 8.423815207566467,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 8.62437924065395,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 9.119242869736102,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 9.134194852113522,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.44908791897404,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.166078152841239,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "b50ba985c50e6755196edbd5c8afb687e5c8a2a1",
          "message": "Document benchmark addition and PR comment in benchmarks README\n\nUpdates docs/benchmarks/README.md to reflect what the pipeline now\ncovers: JMH on eight EVM operations with v2 ports, evmtool benchmark\non two precompiles, nightly schedule, label-gated PR runs, and a\nmarkdown delta comment driven by scripts/diff_jmh.py.\n\nAdds two sections aimed at future contributors:\n- \"How the PR comment works\" — what triggers it, what the columns mean,\n  and the Improvements / Stable Only / Newly slow classification rule\n  inherited from PR #9775.\n- \"How to add a new benchmark\" — concrete steps for JMH opcodes and\n  for evmtool precompiles, including the case-sensitivity gotcha on\n  precompile subcommand names.\n\nRemoves the items that are no longer out of scope (PR-time comments,\nmore than one benchmark) and adds the ones that still are\n(self-hosted runner, statistical tests, cross-client).\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-21T04:40:59Z",
          "url": "https://github.com/parthdagia05/besu/commit/b50ba985c50e6755196edbd5c8afb687e5c8a2a1"
        },
        "date": 1779340723576,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 72.44103176410985,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 106.57150154169021,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 115.1731075977842,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 181.83882257533554,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 75.15216775669776,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 81.63592186418232,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 82.42388803114791,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 73.31958908444184,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 117.66152915724072,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 90.01793156467627,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 67.56131527218625,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 34.0910673778654,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 28.676067397184386,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 24.582054430065394,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 62.49142001404083,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 43.887259459246984,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 70.93638793796933,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 57.628742115011924,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 33.46660177707223,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.682707195955196,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.41602779554668,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 55.115058061023,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 54.83349942628761,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 64.3134559700757,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 66.14960316581669,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 34.68970492262853,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.804936255659435,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.471383044717157,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.554734928345624,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 159.95522810913732,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 15.449957191173619,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 66.00869868467177,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 68.8244434270231,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 58.4833264889711,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.361769497240031,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 8.913906397287386,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 8.677814407436902,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 8.670105307316064,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 8.047550636239462,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 8.236728151882337,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 7.998471852330039,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 8.256009516248437,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 8.000573993002135,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.413053983728464,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 21.345564865777572,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.182869592641099,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 8.899431865214577,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 7.9729617801736765,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 7.931890213772286,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.6412179948075645,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.156061585247887,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 13.207951368572733,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.139643316490497,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 9.047848991156892,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 8.051528926457689,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 8.006080605322351,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.593259490775634,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.092868586187421,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.750843111589148,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 16.271812487317618,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "486c28245800114770c863df5eb03c3dc906c166",
          "message": "Redesign landing dashboard with ethrex-inspired visual style\n\nEarlier version was too plain to read as a continuous-benchmarking\ndashboard. Restructures the page around the visual language ethrex\nuses on benchmarks.ethrex.xyz:\n\n- gradient header card with blue->purple title and a tagline;\n- tab anchor nav row (V1 vs V2 / All benchmarks / Precompiles /\n  Trend) — clicking scrolls to the matching section;\n- info callout card with last-update, latest commit, runs recorded,\n  and the JMH+precompile bench counts;\n- stats strip — Total benchmarks, V2 ports paired, Mean speedup\n  (with min/max range), Runs in history;\n- v1-vs-v2 comparison table with ethrex-style speedup cells: the\n  multiplier sits inside a coloured pill whose background ramps from\n  dark green (>=3x) to light green (>=1.1x) to grey to dusty red\n  (<0.95x) to dark red (<0.75x);\n- dedicated precompiles table for the evmtool benchmark surface;\n- trend chart with a soft blue->purple linear gradient fill and a\n  darker tooltip on hover;\n- floating back-to-top pill that appears after scrolling.\n\nVisuals: rounded-2xl cards over a slate gradient background, glass\nwhite/78 backdrop-blur on the header and callout, system sans-serif\nthroughout, tabular-nums on every numeric column. No external CSS or\nJS framework — Chart.js stays the only CDN dep.\n\nVerdict pill on each pair row uses the Improvement / Stable /\nNewly slow vocabulary from PR #9775.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-21T05:39:21Z",
          "url": "https://github.com/parthdagia05/besu/commit/486c28245800114770c863df5eb03c3dc906c166"
        },
        "date": 1779354846667,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 96.64787376745785,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 104.58995834277441,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 115.1350534317894,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 189.4198740860232,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 91.77521669504635,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 92.02069640403995,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 91.19492433391588,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 103.44598972684494,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 135.65679719945604,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 95.2033271849217,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 76.36335221001791,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 36.62328865370766,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 25.393606310275477,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 23.56233224854541,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 84.43665146749342,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 52.248034458545284,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 92.81648680602558,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 73.65148455226179,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 37.407504379284106,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 20.491917740762425,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 18.01772416417044,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 73.31990511074517,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 68.01820100691869,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 97.29312404309395,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 77.79712643116005,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 36.56667608492824,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 20.647970643464475,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 18.028808945830214,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 74.72405827613929,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 152.2692493719396,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 11.194993505858697,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 68.72464726155381,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 73.61582362683421,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 60.07700159565528,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.71094935707994,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 10.34487783143461,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 10.467060687516112,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 10.011548178338785,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 8.448035150375864,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 8.961354602574502,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 8.445230628255297,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 8.46316517781341,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 8.519184957076975,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.562273208498922,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 11.878956662007917,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.405277157843953,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 10.349162073259674,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 8.564620761133796,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 8.445210163968275,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 9.057245740177324,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 9.072255738215729,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.30369630752439,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.420562655748382,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 9.817639119375295,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 8.426239156568228,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 8.599710405659184,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 9.054917387061243,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 9.07917310459256,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.518266566957948,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.056339500492381,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "486c28245800114770c863df5eb03c3dc906c166",
          "message": "Redesign landing dashboard with ethrex-inspired visual style\n\nEarlier version was too plain to read as a continuous-benchmarking\ndashboard. Restructures the page around the visual language ethrex\nuses on benchmarks.ethrex.xyz:\n\n- gradient header card with blue->purple title and a tagline;\n- tab anchor nav row (V1 vs V2 / All benchmarks / Precompiles /\n  Trend) — clicking scrolls to the matching section;\n- info callout card with last-update, latest commit, runs recorded,\n  and the JMH+precompile bench counts;\n- stats strip — Total benchmarks, V2 ports paired, Mean speedup\n  (with min/max range), Runs in history;\n- v1-vs-v2 comparison table with ethrex-style speedup cells: the\n  multiplier sits inside a coloured pill whose background ramps from\n  dark green (>=3x) to light green (>=1.1x) to grey to dusty red\n  (<0.95x) to dark red (<0.75x);\n- dedicated precompiles table for the evmtool benchmark surface;\n- trend chart with a soft blue->purple linear gradient fill and a\n  darker tooltip on hover;\n- floating back-to-top pill that appears after scrolling.\n\nVisuals: rounded-2xl cards over a slate gradient background, glass\nwhite/78 backdrop-blur on the header and callout, system sans-serif\nthroughout, tabular-nums on every numeric column. No external CSS or\nJS framework — Chart.js stays the only CDN dep.\n\nVerdict pill on each pair row uses the Improvement / Stable /\nNewly slow vocabulary from PR #9775.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-21T05:39:21Z",
          "url": "https://github.com/parthdagia05/besu/commit/486c28245800114770c863df5eb03c3dc906c166"
        },
        "date": 1779440747174,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 81.56670198466229,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 104.9018266431262,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 115.29876675692569,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 193.71096499659959,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 75.30773460503826,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 82.206722407146,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 81.60842484035376,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 69.36017316165992,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 116.94165954797464,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 90.61135483191244,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 67.1851462363845,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 34.24347172775596,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 28.615605378470054,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 24.35950132678506,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 63.83714202092635,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 47.11180640797678,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 70.50634821346179,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 57.43499048071599,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 32.109444935832656,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.631050246286975,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.42421070622624,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 56.22561371673955,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 54.89074113880944,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 68.26014966110506,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 66.44609995681799,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 34.33968011324339,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.54598011144274,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.622502013536494,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.37737827751416,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 158.04682816359974,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 15.40343814762222,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 67.65930480569327,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 69.3172705642144,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 57.15447909281393,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.5268916789036,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 9.184324882644368,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 8.661597030631928,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 8.644941958119228,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 8.209151804672523,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 8.222635719203476,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 8.307481427578285,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 8.048076355014228,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 8.105194063341083,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.242466234744905,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 21.537352367724953,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.458681698261989,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 8.921812205757245,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 7.969893913021403,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 8.089669594457874,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.6171802145281635,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.368022096492084,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.682844749829796,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.154014134332831,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 8.828328687430247,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 8.22856093720883,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 8.277420204518316,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.889503262758639,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.17810839097005,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 13.436506124318134,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 16.348424808879027,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "486c28245800114770c863df5eb03c3dc906c166",
          "message": "Redesign landing dashboard with ethrex-inspired visual style\n\nEarlier version was too plain to read as a continuous-benchmarking\ndashboard. Restructures the page around the visual language ethrex\nuses on benchmarks.ethrex.xyz:\n\n- gradient header card with blue->purple title and a tagline;\n- tab anchor nav row (V1 vs V2 / All benchmarks / Precompiles /\n  Trend) — clicking scrolls to the matching section;\n- info callout card with last-update, latest commit, runs recorded,\n  and the JMH+precompile bench counts;\n- stats strip — Total benchmarks, V2 ports paired, Mean speedup\n  (with min/max range), Runs in history;\n- v1-vs-v2 comparison table with ethrex-style speedup cells: the\n  multiplier sits inside a coloured pill whose background ramps from\n  dark green (>=3x) to light green (>=1.1x) to grey to dusty red\n  (<0.95x) to dark red (<0.75x);\n- dedicated precompiles table for the evmtool benchmark surface;\n- trend chart with a soft blue->purple linear gradient fill and a\n  darker tooltip on hover;\n- floating back-to-top pill that appears after scrolling.\n\nVisuals: rounded-2xl cards over a slate gradient background, glass\nwhite/78 backdrop-blur on the header and callout, system sans-serif\nthroughout, tabular-nums on every numeric column. No external CSS or\nJS framework — Chart.js stays the only CDN dep.\n\nVerdict pill on each pair row uses the Improvement / Stable /\nNewly slow vocabulary from PR #9775.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-21T05:39:21Z",
          "url": "https://github.com/parthdagia05/besu/commit/486c28245800114770c863df5eb03c3dc906c166"
        },
        "date": 1779524553385,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 74.47862197657739,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 105.46449716922896,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 114.26296291786291,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 183.47375315167903,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 75.13636273282958,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 81.84670348202796,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 81.36797826937797,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 69.28423274707174,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 116.03460484667593,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 89.50819715845925,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 66.72630085798285,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 33.91236384701142,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 29.412419049230813,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 24.615985786803556,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 61.988018339307324,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 43.929466365690004,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 70.16271377730142,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 57.63924065663665,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 33.94901470860206,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 20.146721729679626,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.698885790148,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.77621134687705,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 56.65902236879234,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 64.59668584156974,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 66.80679428352585,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 34.74752877312109,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.796277417042205,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.477345135929536,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.064947524799415,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 153.47384587168403,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 15.269379654966333,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.97186490915699,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 70.67690692389672,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 57.945293616981715,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.264568141468409,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 8.91509673921075,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 8.82492738734944,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 8.995181144855033,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 8.476690243693348,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 8.458224243879565,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 8.00039990761624,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 8.08304958920898,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.932336085159622,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.388238236339856,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 22.385729905905016,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.137650835140481,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 8.93365165054384,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 7.954368962946303,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 7.919070157299453,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.5945960202867955,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.017763825717282,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.597326146690246,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.147601392449646,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 8.916352519969028,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 8.090915900395505,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 8.093528197023096,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.58821002098787,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.011760581231941,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.391522720610975,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 16.17571388859231,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "486c28245800114770c863df5eb03c3dc906c166",
          "message": "Redesign landing dashboard with ethrex-inspired visual style\n\nEarlier version was too plain to read as a continuous-benchmarking\ndashboard. Restructures the page around the visual language ethrex\nuses on benchmarks.ethrex.xyz:\n\n- gradient header card with blue->purple title and a tagline;\n- tab anchor nav row (V1 vs V2 / All benchmarks / Precompiles /\n  Trend) — clicking scrolls to the matching section;\n- info callout card with last-update, latest commit, runs recorded,\n  and the JMH+precompile bench counts;\n- stats strip — Total benchmarks, V2 ports paired, Mean speedup\n  (with min/max range), Runs in history;\n- v1-vs-v2 comparison table with ethrex-style speedup cells: the\n  multiplier sits inside a coloured pill whose background ramps from\n  dark green (>=3x) to light green (>=1.1x) to grey to dusty red\n  (<0.95x) to dark red (<0.75x);\n- dedicated precompiles table for the evmtool benchmark surface;\n- trend chart with a soft blue->purple linear gradient fill and a\n  darker tooltip on hover;\n- floating back-to-top pill that appears after scrolling.\n\nVisuals: rounded-2xl cards over a slate gradient background, glass\nwhite/78 backdrop-blur on the header and callout, system sans-serif\nthroughout, tabular-nums on every numeric column. No external CSS or\nJS framework — Chart.js stays the only CDN dep.\n\nVerdict pill on each pair row uses the Improvement / Stable /\nNewly slow vocabulary from PR #9775.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-21T05:39:21Z",
          "url": "https://github.com/parthdagia05/besu/commit/486c28245800114770c863df5eb03c3dc906c166"
        },
        "date": 1779611549947,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 61.019801899351705,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 82.98807506388377,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 87.4694016133153,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 149.1765354075037,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 72.24124966953218,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 72.72924234527444,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 71.77413042235898,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 73.75752592388855,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 105.02307726038501,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 74.36891364314822,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 59.69428438812719,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 29.066495504926166,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 21.033067466475764,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.62711359659856,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 53.62288047104859,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 41.36385878735203,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 66.44219606742256,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 53.39664511106362,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 28.514843656574374,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 16.309605236494722,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 14.002724456935221,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 46.08933398345059,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 52.98226365789592,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 69.8026779038147,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 61.099492389189116,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 29.145763105829758,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 15.8560498398331,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 14.181225149497573,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 46.27644907681543,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 123.09917421180971,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 8.661347252473984,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 56.40653693610973,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 59.74673667796723,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 44.64951209279042,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 5.944948449566665,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 8.042993633762833,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 7.946467111582784,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 7.752521728640784,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 6.542811570968977,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 7.711318053579211,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 6.565878003973775,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 6.560110196663642,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 6.572770580388624,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 6.643498444605806,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 8.296070707998783,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 5.791435428250749,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 8.054252563867891,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 6.62573998562861,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 6.534414811627767,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.0064672397713395,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 7.325172732438406,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 7.59783141904513,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 5.780619853473339,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 7.699001902508445,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 6.525180904810631,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 6.675445462084123,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.002760073388951,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 7.065359835010099,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 8.298294509045977,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 9.727135897415668,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "486c28245800114770c863df5eb03c3dc906c166",
          "message": "Redesign landing dashboard with ethrex-inspired visual style\n\nEarlier version was too plain to read as a continuous-benchmarking\ndashboard. Restructures the page around the visual language ethrex\nuses on benchmarks.ethrex.xyz:\n\n- gradient header card with blue->purple title and a tagline;\n- tab anchor nav row (V1 vs V2 / All benchmarks / Precompiles /\n  Trend) — clicking scrolls to the matching section;\n- info callout card with last-update, latest commit, runs recorded,\n  and the JMH+precompile bench counts;\n- stats strip — Total benchmarks, V2 ports paired, Mean speedup\n  (with min/max range), Runs in history;\n- v1-vs-v2 comparison table with ethrex-style speedup cells: the\n  multiplier sits inside a coloured pill whose background ramps from\n  dark green (>=3x) to light green (>=1.1x) to grey to dusty red\n  (<0.95x) to dark red (<0.75x);\n- dedicated precompiles table for the evmtool benchmark surface;\n- trend chart with a soft blue->purple linear gradient fill and a\n  darker tooltip on hover;\n- floating back-to-top pill that appears after scrolling.\n\nVisuals: rounded-2xl cards over a slate gradient background, glass\nwhite/78 backdrop-blur on the header and callout, system sans-serif\nthroughout, tabular-nums on every numeric column. No external CSS or\nJS framework — Chart.js stays the only CDN dep.\n\nVerdict pill on each pair row uses the Improvement / Stable /\nNewly slow vocabulary from PR #9775.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-21T05:39:21Z",
          "url": "https://github.com/parthdagia05/besu/commit/486c28245800114770c863df5eb03c3dc906c166"
        },
        "date": 1779703638746,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 94.65025636323828,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 102.72827851058632,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 108.11033178760181,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 175.32608490212414,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 84.85927514706519,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 86.74732669987745,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 86.12951527681437,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 94.52854114817332,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 103.34488662235549,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 98.93808157504569,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 70.02121910246375,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 34.44940037290469,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 25.474834402382108,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 22.61666412686367,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 79.81097984927942,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 49.83899865504445,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 88.58590165841127,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 70.02867830502046,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 36.44749006454906,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.299858463367364,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 16.88779292326321,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 69.11454487067692,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 66.14572818550747,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 79.7908081419072,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 72.22339242619327,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 34.98804275200033,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.050162782727377,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 16.86328926359975,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 72.71405887911858,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 144.132912125196,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 11.964142729658262,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.62299863015514,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 68.87751416481191,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 53.409639796191016,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 6.844639935500075,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 9.782385827653593,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 9.527972379726743,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 8.94073427237286,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 7.803026592509008,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 8.211576826693594,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 7.701187304289649,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 7.537337134528357,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.872150332194309,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 7.927015086297372,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 16.836996113333573,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 6.944456705088679,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 9.641544610147061,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 7.682582161242635,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 7.836428695725151,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 8.408186193976116,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.458609667437518,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.132614742631631,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 6.924876223129978,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 9.051653981322863,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 7.561840499847503,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 7.6523713335551165,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 8.386519840365,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.45242743266203,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.063483804118052,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.07417753482443,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "73dca1d8f880105d7b82ae06024105bdf799a8ff",
          "message": "Auto-trigger benchmarks on EVM-critical path changes\n\nAdd a paths filter to the pull_request trigger so PRs that touch\nevm/**, ethereum/core/src/jmh/**, ethereum/evmtool/**, or crypto/**\nget a benchmark run automatically, without needing the benchmark\nlabel. Adjust the job-level if: so label events still gate on the\nbenchmark label, while path-driven events (opened/synchronize/\nreopened) that survived the paths filter run unconditionally. Casual\ncontributors touching the EVM now get coverage even without knowing\nto ask for the label; the label remains the escape hatch for PRs\nwhose paths don't match but should still be benchmarked.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-25T11:17:50Z",
          "url": "https://github.com/parthdagia05/besu/commit/73dca1d8f880105d7b82ae06024105bdf799a8ff"
        },
        "date": 1779789143860,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 62.82446105919022,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 85.65277128208878,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 88.26265726915936,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 146.89472991499343,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 72.27943632078237,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 72.708824383201,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 72.67223331339781,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 73.91410506802619,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 105.14032531369021,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 74.51481495890923,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 59.83627994830702,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 29.05699926068474,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 21.37568105682998,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.962588233525487,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 53.66801661129931,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 41.24457157492087,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 67.07650944242792,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 52.278482167335845,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 28.127864399645297,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 15.893095844851455,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 14.011873365737927,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 42.72278140693454,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 53.25465013109156,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 70.09471815713256,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 60.97501038356321,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 28.6388007991029,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 15.810582528920563,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 13.998005639271792,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 45.08779139085531,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 119.19645825684661,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 8.65877530377008,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 54.616803693425744,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 57.29959053718333,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 44.57614499941725,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 5.985384056919313,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 7.993481114432204,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 7.955464800293886,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 7.76844417271419,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 6.611861058334393,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 7.052717709829596,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 6.546399465974426,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 6.581479487850143,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 6.587617079829675,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 6.629086519413581,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 8.30907045765114,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 5.790253579473881,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 8.019090315935992,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 6.620948040275398,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 6.534045076375233,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.021489215921116,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 7.0340216684595,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 7.441306057350344,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 5.763746927812186,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 7.6302061614740015,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 6.52763400281204,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 6.6614983426381915,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.062196776724285,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 7.040299850464957,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 7.294428112147959,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 9.591424973561786,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "73dca1d8f880105d7b82ae06024105bdf799a8ff",
          "message": "Auto-trigger benchmarks on EVM-critical path changes\n\nAdd a paths filter to the pull_request trigger so PRs that touch\nevm/**, ethereum/core/src/jmh/**, ethereum/evmtool/**, or crypto/**\nget a benchmark run automatically, without needing the benchmark\nlabel. Adjust the job-level if: so label events still gate on the\nbenchmark label, while path-driven events (opened/synchronize/\nreopened) that survived the paths filter run unconditionally. Casual\ncontributors touching the EVM now get coverage even without knowing\nto ask for the label; the label remains the escape hatch for PRs\nwhose paths don't match but should still be benchmarked.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-25T11:17:50Z",
          "url": "https://github.com/parthdagia05/besu/commit/73dca1d8f880105d7b82ae06024105bdf799a8ff"
        },
        "date": 1779875223973,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 79.26441530839489,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 117.58331983478138,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 112.47700757778371,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 185.2662704895024,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 75.4058759257726,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 83.5985529734537,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 81.45922541065488,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 71.7971821507787,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 117.65045664128581,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 90.92955548719887,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 67.59112695845673,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 34.504261112266306,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 27.878165452792718,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 24.561355275001468,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 64.50011477104329,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 44.97070168371577,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 70.64316104142019,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 58.47809240890325,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 33.72048775069893,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.66601964018034,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 18.24453194396553,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 56.447601949476606,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 57.59381336302285,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 64.80874099224012,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 67.41401413303204,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 35.369704812171335,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.78296395142778,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.81377452851453,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.83717894923967,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 165.40230642792199,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 17.263252045001952,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 69.89081050306393,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 69.32184730105432,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 60.74890915603796,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.621690909151319,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 8.894545628606174,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 8.65020493988425,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 8.84403498959267,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 8.401331083159457,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 8.465646601794386,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 8.026540013774177,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 7.984117064850412,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 8.031990533061009,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.760695048918425,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 21.29480300466972,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.1625102506603024,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 8.996786881088507,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 7.998643772554861,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 8.097673026213673,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.617265163580656,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.385543733898567,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 11.67400160152189,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.326715790319602,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 8.78273630863347,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 8.34185977667769,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 8.139425127349673,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.592330934943478,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.74054000694474,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.749438523937538,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 18.509407141365905,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "73dca1d8f880105d7b82ae06024105bdf799a8ff",
          "message": "Auto-trigger benchmarks on EVM-critical path changes\n\nAdd a paths filter to the pull_request trigger so PRs that touch\nevm/**, ethereum/core/src/jmh/**, ethereum/evmtool/**, or crypto/**\nget a benchmark run automatically, without needing the benchmark\nlabel. Adjust the job-level if: so label events still gate on the\nbenchmark label, while path-driven events (opened/synchronize/\nreopened) that survived the paths filter run unconditionally. Casual\ncontributors touching the EVM now get coverage even without knowing\nto ask for the label; the label remains the escape hatch for PRs\nwhose paths don't match but should still be benchmarked.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-25T11:17:50Z",
          "url": "https://github.com/parthdagia05/besu/commit/73dca1d8f880105d7b82ae06024105bdf799a8ff"
        },
        "date": 1779962556711,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 61.2220500410722,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 84.71161211149752,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 89.1871992651636,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 146.12716307959843,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 72.35096896870732,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 72.62809812013464,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 71.28058636657718,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 74.9797983305297,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 88.2380207522209,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 75.10707227603561,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 60.13750207807071,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 29.121565865897622,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 20.64225074867665,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 19.019924757648276,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 53.040083384774206,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 41.03511176049559,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 66.80293881572024,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 52.67329703799591,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 28.145660460512012,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 15.878834684415164,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 13.957471296393496,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 43.0171249579498,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 53.08224693489634,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 70.22369829141068,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 60.83560941134169,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 28.81155448728481,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 15.951041532201646,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 13.994010166392915,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 45.389366511713575,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 118.61145426850098,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 8.682815683775562,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 57.441833589719565,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 57.95124918191475,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 46.07257691369201,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 5.983646260057119,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 8.01753882284343,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 7.9789273539799535,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 7.763968982700777,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 6.563351976270885,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 6.959511458225045,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 6.710047665334649,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 6.567647919390291,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 6.616333067566811,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 6.6555253911510395,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 8.25709443780344,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 5.77569655986153,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 8.01186669167887,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 6.702005175960745,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 6.808928960347655,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 7.03689030446823,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 7.05491199295758,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 7.62681839731015,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 5.752002018889106,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 7.628582496394964,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 6.537733580546932,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 6.683840461512548,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 8.818008063543799,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 7.100563176596336,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 7.539741504191629,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 9.423493305961978,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1780042429305,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 95.79300919902735,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 105.91593602460122,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 111.65254687016849,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 191.7808133707275,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 84.67311247027676,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 77.58309578230391,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 75.00943887136911,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 161.27369179394978,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 11.324414452951613,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 69.44634258130344,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 72.79461117085239,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 59.94607162529811,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.666114365392527,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.617049789382747,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.758337803405896,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.12682491667633,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 980.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 384.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 326.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 141.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 212.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 217.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 216.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 222.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 234.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 351.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 222.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 216,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 255.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 309.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 372.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 292,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 334.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 676270.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1780048359809,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 92.13731985651131,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 102.1766642107093,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 108.22119192054087,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 178.52371227600528,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 78.2709634180325,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 67.53479768772539,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 68.70044526658518,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 143.91620435345,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.112387960977964,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.80195863474589,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 68.06434454921585,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 53.150120078390025,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 17.092697553572133,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.899589631107782,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.696726364888903,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.00852468043887,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 1017,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 450.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 293.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 185.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 176.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 150.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 151.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 150.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 188.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 324.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 259.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 263.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 228.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 301.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 370.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 383.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 296,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 639142.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1780129950819,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 73.62187148074949,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 114.16325569929946,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 123.43265939914332,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 200.08471337745692,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 61.670582233201436,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 56.726934897430965,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.48301440275409,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 163.80226449845816,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 16.618339795464472,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 67.1350453047665,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 71.05547757977133,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 57.496851499024444,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 21.475430842414884,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 13.224444622612927,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.929142098100879,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 17.22567457410792,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 633.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 618.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 477.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 127.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 12890.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 163.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 176,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 174,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 256.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 213.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 221,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 211.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 418.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 515,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 523.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 507.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 561.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 680500.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1780217430921,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 89.36873897526291,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 104.41561149468657,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 111.18339120150908,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 197.6549880262307,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 80.55134426822272,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 72.00722273394605,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 69.74665335019554,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 143.44370585232292,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.165320815081378,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 66.4727551890152,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 67.5707994112086,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 52.93865195613091,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 17.165422114124866,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.179402972279139,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.608381817148649,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.658750324142463,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 447.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 377.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 279.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 198.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 247.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 231.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 229,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 247.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 256.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 248.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 193.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 195.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 230.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 233.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 263.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 281.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 302.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 665793.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1780313190280,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 89.52479827190606,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 105.4296437024719,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 112.20207242153995,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 188.84527145625242,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 80.06530162062955,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 70.19821306028643,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 69.97634532823139,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 143.70620040951403,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.055624202213338,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.09942286774324,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 68.28097800782191,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 53.35102282894004,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 16.801102673444014,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.08448419330306,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.611005023384442,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.419721950264544,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 1030.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 431.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 284.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 127.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 155.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 155,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 166.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 155.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 193.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 346.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 359.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 263.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 317.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 234.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 272.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 269.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 320.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 640664.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1780395686750,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 75.58145947874594,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 108.56505412924753,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 121.55326700689565,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 186.29720423131272,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 61.51813191305509,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 53.885576712050025,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.85119728448228,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 159.91324435307962,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 18.25914616830847,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 66.0482716360178,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 71.41087501187317,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 59.031335928829684,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 18.830372121711303,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 13.984527743020214,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 13.95748595341785,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 18.549693721361557,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 614.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 626.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 359.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 118.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 167.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 175.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 174.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 170.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 275.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 216.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 222.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 222,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 328.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 318.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 334.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 319.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 403,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 657346.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1780484406094,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 89.68550233037881,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 101.2680987205105,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 110.99394925502311,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 174.81449574958708,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 80.13050290445892,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 73.20487674549072,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 68.86186555678174,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 147.5444604503992,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 11.91932913094028,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.36794561540594,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 67.708124991831,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 52.9400963381177,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 16.68476838936576,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 8.925076750395998,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.032319518977356,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.070565708568207,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 1028.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 435.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 319.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 206.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 223.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 252.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 227.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 232.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 191.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 237.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 205.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 204.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 231.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 232.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 264.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 266.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 302.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 657604.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1780567166798,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 89.86111292816565,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 105.50396760909894,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 109.46965244537921,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 179.14961158382218,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 78.31120649726672,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 67.22310177356762,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 68.98021366444087,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 143.4231976556308,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 11.834887325911442,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 68.50669979290426,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 68.7476996283381,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 55.74514901606523,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 16.86869151785176,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.175201094527123,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 8.555174585227377,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.169875071462723,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 1896.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 679.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 814.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 170.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 180.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 161.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 154,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 153.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 189.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 193.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 208,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 226.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 232.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 232.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 233,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 235.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 267.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 686338.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1780652924828,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 95.51840361457407,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 106.04231211947354,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 111.08313282682805,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 187.7515431007202,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 86.47581915518126,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 73.31510929457104,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 76.45056304281817,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 157.84001347988323,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.098099892094968,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 69.13566908021161,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 75.56861387191707,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 61.356434895297205,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.65215206329729,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.154719569209357,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.684311858338171,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 13.315196810750871,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 995.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 370.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 266.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 186.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 169.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 166.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 168.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 168,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 220,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 262.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 212.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 211.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 254.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 267.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 291.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 293.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 337,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 691421,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1780735217074,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 72.37266267877742,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 117.90036592054598,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 113.94132063108025,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 180.57175704148517,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 61.68540071746668,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 55.96443930826452,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.61982274127418,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 156.0061089726605,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 15.380726763936602,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.81405406508989,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 69.21097616704913,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 56.39632690530044,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 21.259502843744713,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.013137386316478,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.5114675425437,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 16.155551085508222,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 955.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 342.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 279.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 122.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 173,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 171.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 167.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 171.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 424.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 349.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 356.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 239.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 315.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 316.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 324.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 319.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 368.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 666927.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1780822912501,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 89.95433572569402,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 100.67403255791018,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 109.13174534000257,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 175.9618620297621,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 78.29638459218003,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 73.76211634161587,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 71.31705522424208,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 142.9405976961707,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.452240265433598,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 66.34921969549791,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 67.8756772342825,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 53.52615434995077,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 17.82544409689169,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 8.937014376589719,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.916713081218033,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.1652194401868,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 674.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 648.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 388.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 213.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 218,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 215.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 153,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 163.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 193.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 343.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 364,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 258.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 290.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 230.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 270.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 277.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 400.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 662875.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1780914867071,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 74.37576436472821,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 109.61559424007423,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 113.80997171827399,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 181.7224221949146,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 62.9665943251213,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 53.496482265295676,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.28473130943858,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 156.52068187884998,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 16.207251470826257,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.5727085052586,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 68.3250057088247,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 57.73709665321642,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 21.36270589641314,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.767356087674377,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 13.059616667311726,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 15.361085530603082,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 1056.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 1029.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 315.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 216.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 286.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 262.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 283.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 283.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 332.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 279.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 211.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 215.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 407.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 520.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 314.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 314.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 354.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 664951.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1780998072223,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 91.07686924363654,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 107.7987271664493,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 109.92572773060347,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 175.16561846515873,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 77.84737419749047,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 70.9433250927469,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 69.36536765355726,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 142.3388869157773,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.252107197231505,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 66.98877016540344,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 68.23997782457774,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 54.96204228897943,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 17.060131069378986,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.302631566117,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.076404501102232,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.490928781987536,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 724.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 652,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 481.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 129.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 154.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 156.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 153.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 151.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 191,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 222.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 192,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 190.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 246.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 231.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 264,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 270,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 315.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 674196.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1781085325194,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 60.74747473192698,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 82.14337070491055,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 87.39418053391339,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 146.2590915367733,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 52.377043613736575,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 46.47183629251011,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 45.013227855859,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 119.80033550491032,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 8.655148485777472,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 54.809253843888506,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 58.820493552241416,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 44.44662703063297,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 8.228975871522895,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 7.414402568092802,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 7.543441952561713,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 9.376406239488006,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 738.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 245.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 265.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 122.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 130.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 124.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 124.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 122.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 161.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 234.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 184.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 185.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 220,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 194.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 223.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 223.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 265.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 529881.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1781173434130,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 95.382894312582,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 104.5801096231389,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 114.873054068133,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 190.37113344165564,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 84.68519726505362,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 73.1130221418854,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 75.06646600042113,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 151.89515297348981,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 11.352936478283585,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 72.08018699847744,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 73.0414280072905,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 60.21187246282894,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.669019199951316,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.48257603194066,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.264530580374279,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.103725825585709,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 1586.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 621.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 419.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 164.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 172.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 168.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 172.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 166.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 232.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 217.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 212.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 250.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 266.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 260.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 258,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 300.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 330.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 667555.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1781259215619,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 90.25986290599332,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 118.40007012960348,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 108.0326564890291,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 175.53979515921546,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 78.39951457431896,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 69.10580686411689,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 68.6278385589899,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 145.50845969348416,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.077890817399311,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.60192565625889,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 67.90230432321412,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 53.08984644095182,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 17.12308386404848,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.095088075007283,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 8.833656637253817,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.068053043926048,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 662.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 657.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 997.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 193.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 161.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 153.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 157.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 154.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 214.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 200.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 205.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 233.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 230.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 244.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 235.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 234.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 277.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 644127.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1781341389605,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 79.56429660960487,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 108.605888129038,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 107.62444137800307,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 186.16728297249747,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 61.81920696852929,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 56.210920264414405,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 53.88286725845868,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 158.54329138251782,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 15.929631831437945,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.73893642771904,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 69.75794955168122,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 57.32057846120379,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 21.32904720910654,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 13.123592357382915,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.945568692431511,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 16.348809054688328,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 431.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 324.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 191.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 213.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 275.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 171.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 161.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 166,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 432.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 343.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 354.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 259.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 300.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 304.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 305.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 318.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 541.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 668297.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1781429729926,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 95.86707747353492,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 104.1141538590388,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 110.60643437658948,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 187.87849071768724,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 86.08332275999365,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 77.52330096359833,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 75.13029352418059,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 152.0235204262877,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 11.208793260094723,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 70.01562216581594,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 73.22015891453492,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 60.20706412064901,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.650834275756985,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.566170414783938,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.681610236469947,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.155355100635944,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 642.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 1074.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 405.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 277.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 229.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 218.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 222.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 222.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 274.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 249.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 214.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 215.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 259.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 308.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 295.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 298.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 338.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 671496.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1781525011235,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 88.56079882451334,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 107.40594303465745,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 109.48192627484734,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 175.12905514387782,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 82.03528579133732,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 67.27660450091061,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 68.208540414759,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 147.30245086279166,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.459322362024668,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.45328360837479,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 68.29720761171781,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 53.25380537825117,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 17.144768849855897,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 8.83535945990494,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.705263031704911,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.192410272092271,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 2183,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 709.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 835.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 557.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 10302.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 221.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 200.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 184.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 198.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 193.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 208.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 193,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 230.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 232.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 271.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 232.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 269.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 676254.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1781608265112,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 96.29545849603453,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 105.1577390798939,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 108.40235997870892,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 188.6977578396739,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 84.27268495543834,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 76.41222234297297,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 74.87887826203828,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 157.58714958111256,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 11.142591814080129,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 70.55651134556689,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 73.26169567416638,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 61.14223498872773,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 11.182255587785914,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.865075288208232,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.436489293265755,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.060446978572157,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 652.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 685,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 357.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 137.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 185.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 167.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 166.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 175.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 218.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 253.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 229.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 232.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 266.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 292.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 296.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 304.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 347.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 665076.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1781692962793,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 95.978984205458,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 106.50003831250362,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 114.09665963292669,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 190.06229587309517,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 85.68582705029306,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 77.86594850895014,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 77.16712516012468,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 153.4719221176449,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 11.134753608059402,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 69.27961567411595,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 75.33908295496913,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 60.39413893572754,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.68849816504002,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.83389265003807,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.57193962088097,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.129646966100786,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 1154.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 1014,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 439.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 273.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 253,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 212.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 217,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 218.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 276.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 212.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 212.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 358.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 302.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 313.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 265.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 297.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 436,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 660969.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1781778133162,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 77.81849614581711,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 109.22866938135569,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 112.70813013070082,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 182.62814453905875,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 61.67521709670134,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.82403908434428,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.63857087173737,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 158.10313695040665,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 16.63993875417601,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.13869536421849,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 69.0169759289191,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 56.48280741384396,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 19.158312189939334,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 13.409906089013134,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.719519159589723,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 17.202111702554724,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 616.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 626.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 444.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 121.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 414,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 166,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 164.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 166.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 225.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 266.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 220.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 228.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 310.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 324.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 307.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 330.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 577.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 679716.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1781864980800,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 89.12370784664918,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 100.97212460036523,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 112.37731930571222,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 179.89339527637915,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 78.77065553104251,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 73.15614927414724,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 68.48343515650967,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 141.9120979205043,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.468910333580968,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.7101648501746,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 70.24352094912942,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 53.340043127462856,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 16.87746548419813,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.22198568146084,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.118798411270353,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.273071833427604,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 644.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 637.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 409.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 150.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 191.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 157.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 181.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 157.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 197.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 196.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 231.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 197.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 235.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 236.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 298,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 268.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 308,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 661123.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1781945848324,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 96.9068480722824,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 104.75337457239095,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 105.91907357232446,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 187.00291825301122,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 85.23696071720465,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 78.89543828924837,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 74.85438742641615,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 153.29192877654742,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 11.344393608071327,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 69.06557575169121,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 73.23470756677752,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 61.26465201676431,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.769566757825206,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.07477642208725,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.685908050264208,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.191486098297412,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 1045.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 398.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 330.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 188.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 213.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 166.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 178.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 166.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 210.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 329.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 276,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 266.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 303.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 393.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 299.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 301.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 337.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 677106.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1782035531125,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 73.14403582584234,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 108.35228206653191,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 115.88168535489065,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 182.45335920428127,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 61.71954219982412,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 56.76474875266287,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.057753031141225,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 156.38896783805853,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 15.299127056213251,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 67.34342182825895,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 68.73636107000011,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 56.38437925884002,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 18.31013966856985,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.944273253664164,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 13.07178368515298,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 15.798819690781457,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 664.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 641.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 12644.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 163,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 171.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 167.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 177.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 173.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 223.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 215.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 212.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 214.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 307.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 263.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 261.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 262.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 316.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 679299.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1782129174429,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 88.33292652260832,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 101.72875626482019,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 111.65534521101662,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 177.15285976531013,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 80.27670898691849,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 69.89252414675909,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 69.31391308059769,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 144.12191259376445,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.377682245670428,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 67.11574784549573,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 67.61663887408088,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 53.22177592892992,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 17.08215086334166,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.812055862709837,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.229203494330473,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.086212141250952,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 663.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 634.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 548.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 194.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 203.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 176.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 154.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 156.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 192.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 197.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 208.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 261.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 234,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 233.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 247.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 268.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 304.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 674920,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1782206116428,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 94.7673014201832,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 104.94398546680797,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 112.02304354217571,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 197.7888368918995,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 85.66867960657488,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 76.07945886256918,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 74.47761537027388,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 152.07827026931523,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 11.218240635006802,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 72.12459910711206,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 75.25243591944144,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 60.36575292230113,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.746345220931936,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.67901456227279,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.894124513884027,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.220222574994812,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 989,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 342.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 363.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 187.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 210.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 233.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 218.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 220.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 215.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 258.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 212.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 212.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 256.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 323.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 377.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 286.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 332.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 674774.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1782292204446,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 90.07335056933682,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 104.33741289016731,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 108.26263025877411,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 181.8370109484725,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 81.99382030610828,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 72.07609711487046,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 69.4204687411624,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 141.4319644055235,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.099296110744868,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.83052191147101,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 68.22823275644836,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 53.39121559770463,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 16.783079722598178,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.295138271645168,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.03463980990133,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.41175497507245,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 976.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 439.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 291,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 191.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 243.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 226.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 229.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 227.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 256.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 362.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 280.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 272.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 291.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 230.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 265.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 267.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 402.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 660171.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1782378128580,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 62.04021333652238,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 82.30599079223403,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 89.59934279673423,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 148.67695500412373,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 52.09999353334265,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 46.51038976843014,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 45.033372199542484,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 124.02202015538424,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 8.647007053753054,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 57.584720667994056,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 58.28339159635391,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 44.45196160976797,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.209043473493022,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 8.448578206735442,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 7.823494099349022,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 9.361433980004524,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 712.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 295.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 180.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 96.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 167.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 167.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 166.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 158.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 184.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 184.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 160,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 165.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 201.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 221.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 270.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 272.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 254,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 518343.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1782464839676,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 88.99947252417381,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 104.59304734336638,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 105.5968859834646,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 191.33491409266873,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 81.07608507940918,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 69.4435751163393,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 69.22138584648434,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 143.3826415353189,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.039422358544197,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 67.00658911780427,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 67.39413307133613,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 53.465541963888086,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 16.753314716314257,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.455984392485915,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.385313579243384,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.423580430786874,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 1024.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 462.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 152.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 124.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 220.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 240.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 239.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 218.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 261.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 231,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 202,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 190.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 229.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 249.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 305.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 372.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 302.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 635272.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1782549744217,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 90.3158052554101,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 104.93348910839367,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 110.24028876344114,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 176.58336116456826,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 79.92382842927209,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 67.75091964842733,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 69.06327012370747,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 142.45071367953125,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.033700257301806,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.93581316304018,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 67.81823789927516,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 53.81502207964775,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 17.213328068578303,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.940799424743643,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.48162450113933,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 12.423074769523671,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 640.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 627.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 454.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 209.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 154,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 151.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 152.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 151.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 188.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 224.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 191,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 190.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 229,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 230.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 268.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 263.2,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 314.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 670906.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "090e3e57af62a2297e5cac727051e96725c6caf9",
          "message": "Drop trailing space breaking bash line continuation in JMH step\n\nLine 87 ended with `\\<space>` instead of `\\<newline>`, which bash\ntreats as an escaped literal space rather than a line continuation.\nThe unescaped newline terminated the gradle invocation after the\ntask path, so gradle saw an empty second argument and failed with\n\"Cannot locate matching tasks for an empty path.\" The -Pincludes,\n-Pcases, -PjmhFork and --rerun-tasks arguments on the following\nlines were parsed as separate shell commands that bash -e aborted\nbefore they could run.\n\nStrip the trailing space so the backslash genuinely continues the\nline. Other continuation lines in the same step are already clean;\nthis was a single-character regression hidden behind the recent\ninline-comment additions on neighbouring lines.\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-29T07:57:03Z",
          "url": "https://github.com/parthdagia05/besu/commit/090e3e57af62a2297e5cac727051e96725c6caf9"
        },
        "date": 1782637045689,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 77.92190906672914,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.DivOperationBenchmark.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 107.0101467200551,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ModOperationBenchmark.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 115.10060398401993,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.MulOperationBenchmark.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 182.50925358687817,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 61.30324245128541,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 55.37154405647736,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 54.160272850105756,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SubOperationBenchmark.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 156.84941312634206,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 15.108490513339396,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.DivOperationBenchmarkV2.executeOperation ( {\"caseName\":\"DIV_RANDOM_RANDOM\"} )",
            "value": 65.9273407783316,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ModOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MOD_RANDOM_RANDOM\"} )",
            "value": 67.60814483807266,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.MulOperationBenchmarkV2.executeOperation ( {\"caseName\":\"MUL_RANDOM_RANDOM\"} )",
            "value": 56.11369477123664,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 21.18817004871535,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.658277319477756,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 12.146858579324459,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SubOperationBenchmarkV2.executeOperation ( {\"caseName\":\"SUB_RANDOM_RANDOM\"} )",
            "value": 14.461181056614521,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=0 ( {\"precompile\":\"sha256\",\"case\":\"size=0\"} )",
            "value": 643.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=16 ( {\"precompile\":\"sha256\",\"case\":\"size=16\"} )",
            "value": 633.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=32 ( {\"precompile\":\"sha256\",\"case\":\"size=32\"} )",
            "value": 427.5,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=48 ( {\"precompile\":\"sha256\",\"case\":\"size=48\"} )",
            "value": 119.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=64 ( {\"precompile\":\"sha256\",\"case\":\"size=64\"} )",
            "value": 170.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=80 ( {\"precompile\":\"sha256\",\"case\":\"size=80\"} )",
            "value": 172.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=96 ( {\"precompile\":\"sha256\",\"case\":\"size=96\"} )",
            "value": 165.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=112 ( {\"precompile\":\"sha256\",\"case\":\"size=112\"} )",
            "value": 166.8,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=128 ( {\"precompile\":\"sha256\",\"case\":\"size=128\"} )",
            "value": 263.3,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=144 ( {\"precompile\":\"sha256\",\"case\":\"size=144\"} )",
            "value": 216.7,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=160 ( {\"precompile\":\"sha256\",\"case\":\"size=160\"} )",
            "value": 214.9,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=176 ( {\"precompile\":\"sha256\",\"case\":\"size=176\"} )",
            "value": 220.1,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=192 ( {\"precompile\":\"sha256\",\"case\":\"size=192\"} )",
            "value": 320,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=208 ( {\"precompile\":\"sha256\",\"case\":\"size=208\"} )",
            "value": 315,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=224 ( {\"precompile\":\"sha256\",\"case\":\"size=224\"} )",
            "value": 321.4,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=240 ( {\"precompile\":\"sha256\",\"case\":\"size=240\"} )",
            "value": 323,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.sha256.size=256 ( {\"precompile\":\"sha256\",\"case\":\"size=256\"} )",
            "value": 358.6,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          },
          {
            "name": "evmtool.EcRecover.ecrecover ( {\"precompile\":\"EcRecover\",\"case\":\"ecrecover\"} )",
            "value": 647233,
            "unit": "ns/op",
            "extra": "iterations: 0\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}