window.BENCHMARK_DATA = {
  "lastUpdate": 1779339787848,
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
      }
    ]
  }
}