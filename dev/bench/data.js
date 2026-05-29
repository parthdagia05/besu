window.BENCHMARK_DATA = {
  "lastUpdate": 1780048360735,
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
      }
    ]
  }
}